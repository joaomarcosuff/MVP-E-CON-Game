
import { useState, useEffect, useMemo } from 'react';
import katex from 'katex';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from "./firebaseClient";
import { Track, Module, Lesson, Question, PlayerProgress, LessonCard } from './types';
import { lessonsData } from './game/config/roadmap';
import { playSFX } from './audioService';

// --- TYPES FOR VIEW STATE ---
type ViewState = 'HOME' | 'LOGIN' | 'TRACKS' | 'LEVELS' | 'LESSONS' | 'QUIZ' | 'MODULE_COMPLETE';

// --- PROGRESS HOOK ---
const usePlayerProgress = () => {
    const [progress, setProgress] = useState<PlayerProgress>(() => {
        const saved = localStorage.getItem('econoquest_progress');
        return saved ? JSON.parse(saved) : {
            xp: 0,
            level: 1,
            streak: 0,
            completedLessons: [],
            lessonMastery: {},
            hearts: 5,
            lastLoginDate: new Date().toISOString(),
            displayName: 'Viajante',
            photoURL: ''
        };
    });

    useEffect(() => {
        localStorage.setItem('econoquest_progress', JSON.stringify(progress));
    }, [progress]);

    return [progress, setProgress] as const;
};

// --- HELPERS ---
const LatexText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
    if (!text) return null;

    // Função interna para renderizar sem mostrar os delimitadores
    const processContent = (rawText: string) => {
        let html = rawText;

        // 1. Processar Blocos de Destaque ($$ ... $$)
        html = html.replace(/\$\$([\s\S]+?)\$\$/g, (_, formula) => {
            try {
                return `<div class="katex-display my-4">${katex.renderToString(formula, { displayMode: true, throwOnError: false })}</div>`;
            } catch (e) {
                return formula; 
            }
        });

        // 2. Processar Fórmulas na Linha ($ ... $)
        html = html.replace(/\$([^\$]+?)\$/g, (_, formula) => {
            try {
                return katex.renderToString(formula, { displayMode: false, throwOnError: false });
            } catch (e) {
                return formula;
            }
        });

        // 3. Processar Lacunas ({{gap}})
        html = html.replace(/\{\{gap\}\}/g, 
            '<span class="inline-block px-2 mx-1 border-b-4 border-brand-primary text-brand-primary font-black min-w-[80px] text-center bg-indigo-50/50 rounded-t-lg">____</span>'
        );

        return html;
    };

    return (
        <span 
            className={className} 
            dangerouslySetInnerHTML={{ __html: processContent(text) }} 
        />
    );
};

const ProgressBar: React.FC<{ current: number; total: number; color?: string }> = ({ current, total, color = "bg-brand-success" }) => {
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));
    return (
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
            <div className={`${color} h-full rounded-full transition-all duration-500 ease-out`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

// --- QUIZ COMPONENT ---
const QuizView: React.FC<{
    lesson: Lesson;
    masteryLevel: number;
    onComplete: (xpEarned: number, success: boolean, keepOpen?: boolean) => void;
    onExit: () => void;
}> = ({ lesson, masteryLevel, onComplete, onExit }) => {
    const currentCards = useMemo(() => {
        if (lesson.masteryCards && lesson.masteryCards[masteryLevel]) {
            return lesson.masteryCards[masteryLevel];
        }
        return masteryLevel === 0 ? lesson.cards : [];
    }, [lesson, masteryLevel]);

    const [phase, setPhase] = useState<'CARDS' | 'QUIZ' | 'SUMMARY'>(
        (currentCards && currentCards.length > 0) ? 'CARDS' : 'QUIZ'
    );
    const [cardIndex, setCardIndex] = useState(0);
    const [qIndex, setQIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
    const [inputVal, setInputVal] = useState('');
    const [correctCount, setCorrectCount] = useState(0);
    const [showHint, setShowHint] = useState(false);

    const [completedLevelAt] = useState(masteryLevel);

    const activeQuestions = useMemo(() => {
        const LESSONS_WITH_30_QUESTIONS = ["MAT1-L01", "MAT1-L02", "MAT1-L03", "MAT1-L04", "MAT1-L05"];
        
        if (LESSONS_WITH_30_QUESTIONS.includes(lesson.id) && lesson.questions.length >= 30) {
            if (completedLevelAt === 0) return lesson.questions.slice(0, 10);
            if (completedLevelAt === 1) return lesson.questions.slice(10, 20);
            if (completedLevelAt === 2) return lesson.questions.slice(20, 30);
        }
        
        if (lesson.questions.length >= 20) {
            if (completedLevelAt === 0) return lesson.questions.slice(0, 10);
            if (completedLevelAt === 1) return lesson.questions.slice(10, 20);
            return [...lesson.questions].sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        return lesson.questions;
    }, [lesson, completedLevelAt]);

    const totalQuestions = activeQuestions.length;
    const currentQ = activeQuestions[qIndex];

    const handleSubmit = (ans: string) => {
        if (feedback) return;
        const normalize = (s: string) => s.trim().toLowerCase().replace(',', '.').replace(/\$/g, '').replace(/\\/g, '');
        const userAns = normalize(ans);
        const correctAns = normalize(currentQ.answer || '');
        
        const isCorrect = userAns === correctAns;

        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
            playSFX('correct');
        } else {
            playSFX('wrong');
        }

        setFeedback({
            correct: isCorrect,
            text: isCorrect ? (currentQ.feedback || "Excelente!") : (currentQ.explanation || `A resposta correta é: ${currentQ.answer}`)
        });
        setShowHint(false);
    };

    const handleNext = () => {
        setFeedback(null);
        setInputVal('');
        setShowHint(false);
        if (qIndex < totalQuestions - 1) {
            setQIndex(prev => prev + 1);
        } else {
            const success = (correctCount / totalQuestions) >= 0.6;
            if (success) {
                playSFX('level_up');
                setPhase('SUMMARY');
                onComplete(lesson.xp, true, true);
            } else {
                onComplete(0, false);
            }
        }
    };

    if (phase === 'SUMMARY') {
        const nextLevel = completedLevelAt + 1;
        const isTotalComplete = nextLevel === 3;

        return (
            <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center p-6 text-white text-center animate-fade-in transition-all duration-1000 ${isTotalComplete ? 'bg-amber-500 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]' : 'bg-brand-primary'}`}>
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl mb-8 shadow-2xl animate-bounce">
                    {isTotalComplete ? '👑' : '🎉'}
                </div>
                
                <h1 className="text-5xl font-black mb-4 tracking-tighter italic uppercase drop-shadow-lg">
                    {isTotalComplete ? 'LIÇÃO CONCLUÍDA!' : 'PARABÉNS!'}
                </h1>
                
                <p className="text-xl opacity-90 mb-10 max-w-sm font-medium leading-tight">
                    {isTotalComplete 
                      ? `Você dominou completamente a lição "${lesson.title}" e se tornou um Expert Marginal!` 
                      : `Você dominou o Treino ${nextLevel}/3 da lição "${lesson.title}".`}
                </p>
                
                <div className="flex gap-3 mb-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-4 transition-all duration-700 ${i <= nextLevel ? 'bg-white border-white scale-110 shadow-[0_0_20px_white]' : 'bg-white/10 border-white/20'}`} />
                    ))}
                </div>

                <div className="flex flex-col gap-4 w-full max-w-xs">
                    {!isTotalComplete ? (
                        <>
                            <button 
                                onClick={onExit}
                                className="w-full bg-white text-brand-primary py-5 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border-b-8 border-slate-200"
                            >
                                AVANÇAR PARA {nextLevel + 1}/3 ➜
                            </button>
                            <button 
                                onClick={onExit}
                                className="w-full bg-brand-dark/30 border-2 border-white/20 text-white py-4 rounded-3xl font-black hover:bg-brand-dark/40 transition-all uppercase text-sm tracking-widest"
                            >
                                VOLTAR AO MENU
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={onExit}
                            className="w-full bg-brand-dark text-white py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest border-b-8 border-black/40"
                        >
                            FINALIZAR JORNADA
                        </button>
                    )}
                </div>
            </div>
        );
    }

    if (phase === 'CARDS') {
        const card = currentCards[cardIndex];
        return (
            <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col p-4 md:p-8">
                <div className="max-w-2xl mx-auto w-full flex-grow flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <button onClick={onExit} className="text-white/50 text-2xl">✕</button>
                        <span className="text-brand-primary font-black uppercase text-xs">AULA {completedLevelAt+1}/3: {cardIndex+1}/{currentCards.length}</span>
                        <div className="w-8"></div>
                    </div>
                    <ProgressBar current={cardIndex+1} total={currentCards.length} color="bg-brand-primary" />
                    <div className="flex-grow flex flex-col justify-center items-center py-10 animate-fade-in">
                        <div className="bg-white p-8 rounded-[2rem] shadow-2xl w-full border-b-8 border-slate-200 overflow-y-auto max-h-[70vh]">
                            <h2 className="text-2xl font-black text-slate-800 mb-6 text-center">{card.title}</h2>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                {card.html && <LatexText text={card.html} className="block" />}
                                {card.latex && <div className="mt-6 text-center text-xl bg-slate-50 p-4 rounded-2xl"><LatexText text={card.latex} /></div>}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                        <button disabled={cardIndex === 0} onClick={() => setCardIndex(c => c - 1)} className="flex-1 py-4 bg-white border-b-4 border-slate-200 rounded-2xl font-bold disabled:opacity-30">VOLTAR</button>
                        <button onClick={() => cardIndex < currentCards.length - 1 ? setCardIndex(c => c + 1) : setPhase('QUIZ')} className="flex-[2] py-4 bg-brand-primary text-white rounded-2xl font-black shadow-lg shadow-indigo-900/20 uppercase">
                            {cardIndex === currentCards.length - 1 ? "COMEÇAR TREINO ➜" : "PRÓXIMO"}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col animate-slide-up">
            <div className="p-4 md:p-8 flex-grow flex flex-col max-w-2xl mx-auto w-full">
                <div className="flex justify-between items-center mb-2">
                    <button onClick={onExit} className="text-slate-300 text-2xl">✕</button>
                    <span className="text-brand-primary font-black uppercase text-xs tracking-widest">Questão {qIndex+1} de {totalQuestions}</span>
                    <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-black uppercase">Treino {completedLevelAt+1}/3</div>
                </div>
                <ProgressBar current={qIndex+1} total={totalQuestions} color="bg-brand-success" />
                
                <div className="flex-grow flex flex-col justify-center py-10">
                    <div className="mb-6 flex justify-center">
                        {currentQ.hint && !feedback && (
                            <button 
                                onClick={() => setShowHint(!showHint)}
                                className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full transition-all border-2 ${showHint ? 'bg-amber-400 border-amber-500 text-amber-900' : 'bg-white border-slate-200 text-slate-400 hover:border-amber-300 hover:text-amber-500'}`}
                            >
                                {showHint ? '💡 DICA ATIVA' : '💡 PRECISA DE UMA DICA?'}
                            </button>
                        )}
                    </div>

                    {showHint && (
                        <div className="mb-8 p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl animate-fade-in text-amber-900 text-sm font-medium text-center italic">
                            <LatexText text={currentQ.hint || ""} />
                        </div>
                    )}

                    <h2 className="text-xl md:text-3xl font-bold text-slate-800 text-center mb-10 leading-tight">
                        {(currentQ.prompt || currentQ.text) && <LatexText text={currentQ.prompt || currentQ.text || ""} />}
                        {currentQ.latex && <div className="mt-4"><LatexText text={currentQ.latex} /></div>}
                    </h2>
                    
                    <div className="w-full">
                        {currentQ.type === 'multiple_choice' && (
                            <div className="grid gap-3">
                                {currentQ.options?.map((opt, i) => (
                                    <button key={i} disabled={!!feedback} onClick={() => handleSubmit(typeof opt === 'string' ? opt : opt.text)} className={`p-4 rounded-2xl border-2 text-left font-bold transition-all ${feedback ? ((typeof opt === 'string' ? opt : opt.text).toLowerCase().includes((currentQ.answer || '').toLowerCase()) ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white opacity-40 border-slate-100') : 'bg-white border-slate-200 hover:border-brand-primary active:scale-95'}`}>
                                        <LatexText text={typeof opt === 'string' ? opt : opt.text} />
                                    </button>
                                ))}
                            </div>
                        )}
                        {(currentQ.type === 'numeric' || currentQ.type === 'input' || currentQ.type === 'fill_gap') && (
                            <div className="flex flex-col gap-6 items-center">
                                <div className="flex flex-col md:flex-row gap-3 w-full max-w-lg">
                                    <input 
                                        type="text" 
                                        value={inputVal} 
                                        onChange={e => setInputVal(e.target.value)} 
                                        disabled={!!feedback} 
                                        onKeyDown={e => e.key === 'Enter' && handleSubmit(inputVal)} 
                                        autoFocus
                                        className={`flex-1 p-5 border-4 rounded-[2rem] font-black text-center text-2xl outline-none transition-all ${feedback ? 'bg-slate-50 border-slate-200' : 'bg-white border-brand-primary focus:shadow-[0_0_20px_rgba(67,56,202,0.2)] text-brand-primary placeholder:text-slate-200'}`} 
                                        placeholder="Digite aqui..." 
                                    />
                                    {!feedback && (
                                        <button 
                                            onClick={() => handleSubmit(inputVal)} 
                                            className="bg-brand-primary hover:bg-indigo-700 active:scale-95 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-indigo-900/20 transition-all uppercase tracking-widest"
                                        >
                                            OK
                                        </button>
                                    )}
                                </div>
                                {currentQ.type === 'fill_gap' && <p className="text-center text-slate-400 font-medium text-sm italic">Complete a lacuna do texto acima.</p>}
                            </div>
                        )}
                    </div>
                </div>
                {feedback && (
                    <div className={`p-6 rounded-[2.5rem] mb-4 border-t-8 animate-slide-up shadow-2xl ${feedback.correct ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
                        <div className={`font-black text-2xl mb-2 flex items-center gap-2 ${feedback.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                            {feedback.correct ? '✓ EXCELENTE!' : '✕ NÃO FOI DESSA VEZ'}
                        </div>
                        <p className="text-slate-700 mb-6 font-medium leading-relaxed">
                            <LatexText text={feedback.text} />
                        </p>
                        <button onClick={handleNext} className={`w-full py-5 rounded-2xl font-black text-white text-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest ${feedback.correct ? 'bg-emerald-500' : 'bg-red-500'}`}>
                            CONTINUAR
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- MAIN APP ---
export default function App() {
    const [progress, setProgress] = usePlayerProgress();
    const [view, setView] = useState<ViewState>('HOME');
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setProgress(prev => ({ ...prev, displayName: result.user?.displayName || 'Viajante', photoURL: result.user?.photoURL || '' }));
            setView('TRACKS');
        } catch (e) { console.error(e); }
    };

    const getTrack = () => lessonsData.tracks.find(t => t.id === selectedTrackId);
    const getModule = () => getTrack()?.modules.find(m => m.id === selectedModuleId);

    const handleLessonComplete = (xpEarned: number, success: boolean, keepOpen: boolean = false) => {
        if (success && activeLesson) {
             const currentMastery = progress.lessonMastery[activeLesson.id] || 0;
             const newMastery = Math.min(3, currentMastery + 1);
             const xpBonus = success ? Math.floor(xpEarned * (1 + currentMastery * 0.5)) : 0;

             setProgress(prev => ({
                 ...prev,
                 xp: prev.xp + xpBonus,
                 completedLessons: prev.completedLessons.includes(activeLesson.id) ? prev.completedLessons : [...prev.completedLessons, activeLesson.id],
                 lessonMastery: { ...prev.lessonMastery, [activeLesson.id]: newMastery },
                 streak: prev.streak + 1
             }));
        } else if (!success) {
             setProgress(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1), streak: 0 }));
             playSFX('wrong');
        }
        
        if (!keepOpen) {
            setActiveLesson(null);
        }
    };

    return (
        <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
            {view !== 'HOME' && view !== 'LOGIN' && !activeLesson && (
                <div className="sticky top-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 p-4">
                    <div className="max-w-5xl mx-auto flex justify-between items-center">
                        <div className="font-black text-white text-lg cursor-pointer" onClick={() => setView('HOME')}>ECONO<span className="text-amber-400">QUEST</span></div>
                        <div className="flex items-center gap-4">
                            <div className="text-amber-400 font-bold text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">⚡ {progress.xp}</div>
                            <div className="text-red-500 font-bold text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">❤️ {progress.hearts}</div>
                        </div>
                    </div>
                </div>
            )}

            <main className="animate-fade-in relative">
                {view === 'HOME' && (
                    <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
                        <div className="w-32 h-32 bg-brand-primary rounded-[2.5rem] flex items-center justify-center text-white text-6xl font-black mb-10 shadow-2xl transform -rotate-12 animate-bounce">E</div>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter italic">ECONO<span className="text-amber-400">QUEST</span></h1>
                        <p className="text-indigo-200 text-xl mb-14 max-w-sm opacity-70">Domine a economia universitária de forma épica através do treino constante.</p>
                        <button onClick={() => setView('LOGIN')} className="bg-brand-success text-white px-20 py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase">VAMOS LÁ!</button>
                    </div>
                )}

                {view === 'LOGIN' && (
                    <div className="flex flex-col items-center justify-center min-h-[90vh] animate-fade-in px-6">
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-2xl max-w-sm w-full">
                            <h2 className="text-3xl font-black text-white mb-10 text-center">Inicie sua Jornada</h2>
                            <button onClick={handleGoogleLogin} className="w-full bg-white text-brand-dark py-5 rounded-3xl font-black flex items-center justify-center gap-3 hover:bg-slate-50 transition-all border-b-8 border-slate-200 active:border-b-0 active:translate-y-2">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-7 h-7"/> Google Login
                            </button>
                            <button onClick={() => setView('TRACKS')} className="w-full mt-8 bg-transparent border-2 border-white/10 text-white/60 py-4 rounded-3xl font-black hover:bg-white/5 transition-all text-xs uppercase tracking-widest">Acesso Visitante</button>
                        </div>
                    </div>
                )}

                {view === 'TRACKS' && (
                    <div className="max-w-5xl mx-auto p-10">
                        <h2 className="text-white text-4xl font-black mb-12 text-center tracking-tighter uppercase italic">Escolha sua Trilha</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {lessonsData.tracks.map(track => (
                                <button key={track.id} onClick={() => { setSelectedTrackId(track.id); setView('LEVELS'); }} className="bg-white p-10 rounded-[3rem] shadow-2xl hover:-translate-y-4 transition-all text-left group border-b-[15px] border-slate-200 active:border-b-0 active:translate-y-0">
                                    <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">{track.icon}</div>
                                    <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{track.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed text-sm">{track.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {view === 'LEVELS' && (
                    <div className="max-w-2xl mx-auto p-10">
                        <div className="flex items-center gap-4 mb-12 text-white"><button onClick={() => setView('TRACKS')} className="opacity-40 font-black text-xs uppercase tracking-widest">← VOLTAR</button><h2 className="text-3xl font-black flex-1 text-center italic tracking-tighter uppercase">{getTrack()?.title}</h2></div>
                        <div className="space-y-6">
                            {getTrack()?.modules.map((mod) => {
                                // DESBLOQUEIO TOTAL PARA MÓDULOS
                                const isUnlocked = true;
                                
                                return (
                                    <button key={mod.id} onClick={() => { setSelectedModuleId(mod.id); setView('LESSONS'); }} className="w-full p-8 rounded-[2.5rem] flex items-center justify-between transition-all bg-white text-slate-800 shadow-2xl hover:bg-indigo-50 border-b-8 border-slate-200 active:border-b-0 active:translate-y-2">
                                        <div className="text-left"><h3 className="font-black text-xl mb-1">{mod.title}</h3><p className="text-xs font-black opacity-40 uppercase tracking-widest">{mod.description}</p></div>
                                        <div className="text-3xl">➜</div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {view === 'LESSONS' && (
                    <div className="max-w-xl mx-auto p-6 pb-32">
                        <div className="flex flex-col items-center mb-10 text-white">
                            <div className="flex items-center w-full">
                                <button onClick={() => setView('LEVELS')} className="opacity-50 font-black text-xs uppercase tracking-widest">← NÍVEIS</button>
                                <h2 className="flex-1 text-center font-black text-xl uppercase tracking-tighter">{getModule()?.title}</h2>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-12">
                            {getModule()?.lessons?.map((lesson) => {
                                const mastery = progress.lessonMastery[lesson.id] || 0;
                                // DESBLOQUEIO TOTAL PARA LIÇÕES
                                const isUnlocked = true;
                                
                                return (
                                    <div key={lesson.id} className="relative flex flex-col items-center group w-full">
                                        <button onClick={() => setActiveLesson(lesson)} className={`relative w-24 h-24 rounded-full border-b-[10px] flex flex-col items-center justify-center transition-all z-10 ${mastery >= 3 ? 'bg-amber-400 border-amber-600 scale-110 shadow-[0_0_30px_rgba(251,191,36,0.6)]' : 'bg-brand-primary border-indigo-900 active:border-b-0 active:translate-y-2'}`}>
                                            <span className="text-3xl mb-1">{mastery >= 3 ? '👑' : '★'}</span>
                                            <div className="flex gap-1.5">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className={`w-2 h-2 rounded-full border border-black/10 ${mastery >= i ? 'bg-white shadow-[0_0_8px_white]' : 'bg-black/20'}`} />
                                                ))}
                                            </div>
                                        </button>
                                        <div className="mt-4 bg-white px-5 py-2 rounded-2xl shadow-xl font-black text-sm border-b-4 border-slate-100">
                                            {lesson.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>

            {activeLesson && (
                <QuizView 
                    lesson={activeLesson}
                    masteryLevel={progress.lessonMastery[activeLesson.id] || 0}
                    onComplete={handleLessonComplete}
                    onExit={() => setActiveLesson(null)}
                />
            )}
        </div>
    );
}
