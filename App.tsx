
import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import { Track, Module, Lesson, Question, PlayerProgress } from './types';
import { lessonsData } from './lessonsData';
import { progressionRules } from './progressionRules';

// --- TYPES FOR VIEW STATE ---
type ViewState = 'HOME' | 'TRACKS' | 'LEVELS' | 'LESSONS' | 'QUIZ';

// --- MOCK AUTH FOR MVP (Local Storage) ---
const usePlayerProgress = () => {
    const [progress, setProgress] = useState<PlayerProgress>(() => {
        const saved = localStorage.getItem('econoquest_progress');
        return saved ? JSON.parse(saved) : {
            xp: 0,
            level: 1,
            streak: 0,
            completedLessons: [],
            hearts: 5,
            lastLoginDate: new Date().toISOString()
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
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g);

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                    const content = part.slice(2, -2);
                    try {
                        const html = katex.renderToString(content, { displayMode: true, throwOnError: false });
                        return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
                    } catch (e) { return <span key={index}>{part}</span>; }
                } else if (part.startsWith('$') && part.endsWith('$')) {
                    const content = part.slice(1, -1);
                    try {
                        const html = katex.renderToString(content, { displayMode: false, throwOnError: false });
                        return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
                    } catch (e) { return <span key={index}>{part}</span>; }
                }
                return <span key={index}>{part}</span>;
            })}
        </span>
    );
};

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    // Calculates percentage (current is 1-based index for display, so current/total)
    // Ensures it doesn't exceed 100%
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));
    
    return (
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4 overflow-hidden">
            <div 
                className="bg-brand-success h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(16,185,129,0.4)]" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

// --- COMPONENTS ---

const HeaderStats: React.FC<{ progress: PlayerProgress }> = ({ progress }) => (
    <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
            <span className="text-red-500 text-xl">❤️</span>
            <span className="font-bold text-slate-700">{progress.hearts}</span>
        </div>
        <div className="flex items-center gap-1 bg-orange-100/50 px-3 py-1 rounded-full border border-orange-200">
            <span className="text-xl">🔥</span>
            <span className="font-bold text-orange-700">{progress.streak}</span>
        </div>
        <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
            <span className="text-amber-500 text-xl">⚡</span>
            <span className="font-bold text-slate-700">{progress.xp}</span>
        </div>
    </div>
);

// --- QUIZ COMPONENT ---

const QuizView: React.FC<{
    lesson: Lesson;
    onComplete: (xpEarned: number, success: boolean) => void;
    onExit: () => void;
}> = ({ lesson, onComplete, onExit }) => {
    const [qIndex, setQIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
    const [inputVal, setInputVal] = useState('');
    const [correctCount, setCorrectCount] = useState(0);

    // Dynamic reference to total questions in this lesson
    const totalQuestions = lesson.questions.length;
    const question = lesson.questions[qIndex];

    const handleSubmit = (ans: string) => {
        let isCorrect = false;

        // Normalization for text/numeric comparison
        const normalize = (s: string) => s.trim().toLowerCase().replace(',', '.');
        const userAns = normalize(ans);
        const correctAns = normalize(question.answer);

        if (question.type === 'numeric' || question.type === 'fill_gap' || question.type === 'input') {
             isCorrect = userAns === correctAns;
        } else if (question.type === 'multiple_choice') {
             isCorrect = userAns === correctAns;
        } else if (question.type === 'graph_point') {
             // Handled by handleGraphClick
             isCorrect = ans === 'correct'; 
        }

        if (isCorrect) setCorrectCount(prev => prev + 1);

        setFeedback({
            correct: isCorrect,
            text: isCorrect 
                ? (question.feedback || "✅ Correto!") 
                : `❌ Tente novamente. A resposta era: ${question.answer}`
        });
    };

    const handleGraphClick = (e: React.MouseEvent<SVGSVGElement>) => {
        if (feedback) return;
        if (!question.target) return;

        const svg = e.currentTarget;
        const rect = svg.getBoundingClientRect();
        // Calculate click position relative to SVG 300x300 viewBox
        const x = ((e.clientX - rect.left) / rect.width) * 300;
        const y = ((e.clientY - rect.top) / rect.height) * 300;

        const dx = Math.abs(x - question.target.x);
        const dy = Math.abs(y - question.target.y);
        
        // Tolerance check
        const isHit = dx < question.target.tolerance && dy < question.target.tolerance;
        
        if (isHit) {
            handleSubmit("correct"); // Special keyword for graph success
        } else {
            setFeedback({
                correct: false,
                text: question.explanation || "❌ Tente novamente. Clique na área indicada."
            });
        }
    };

    const handleNext = () => {
        setFeedback(null);
        setInputVal('');
        
        // CORRECTION: Logic to ensure ALL questions are shown
        // Uses totalQuestions (questions.length) as the source of truth
        if (qIndex < totalQuestions - 1) {
            setQIndex(prev => prev + 1);
        } else {
            // End of Lesson Logic
            const accuracy = correctCount / totalQuestions;
            const success = accuracy >= progressionRules.unlock_logic.min_accuracy_to_unlock;
            
            let xp = 0;
            if (success) {
                // Base XP + Bonus Logic
                xp = lesson.xp;
                if (correctCount === totalQuestions) {
                    xp += progressionRules.xp_system.perfect_lesson_bonus;
                }
            }
            onComplete(xp, success);
        }
    };

    // --- RENDER QUESTION TYPES ---

    const renderContent = () => {
        if (!question) return <div>Carregando...</div>;

        // 1. Graph Point Question
        if (question.type === 'graph_point') {
            return (
                <div className="flex flex-col items-center w-full animate-fade-in">
                    <p className="mb-4 text-center font-bold text-slate-700">{question.instruction}</p>
                    <div className="relative w-full max-w-sm aspect-square bg-white border-2 border-slate-200 rounded-xl shadow-inner cursor-crosshair overflow-hidden">
                        <svg viewBox="0 0 300 300" className="w-full h-full" onClick={handleGraphClick}>
                             <defs>
                                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            {/* Axes */}
                            <line x1="10" y1="280" x2="290" y2="280" stroke="#94a3b8" strokeWidth="2" />
                            <line x1="20" y1="290" x2="20" y2="10" stroke="#94a3b8" strokeWidth="2" />
                            {/* The Curve */}
                            <path d={question.svgPath} fill="none" stroke="#4338ca" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        {feedback && (
                            <div 
                                className={`absolute w-8 h-8 rounded-full border-2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
                                ${feedback.correct ? 'border-emerald-500 bg-emerald-100' : 'border-red-500 bg-red-100'}`}
                                style={{ left: `${(question.target!.x / 300)*100}%`, top: `${(question.target!.y / 300)*100}%` }}
                            >
                                {feedback.correct ? '✓' : '✕'}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // 2. Fill Gap
        if (question.type === 'fill_gap') {
             const parts = question.text?.split('{{gap}}') || ["", ""];
             return (
                 <div className="text-xl leading-loose text-center font-medium text-slate-700 animate-fade-in">
                     <span>{parts[0]}</span>
                     <input 
                        type="text" 
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        disabled={!!feedback}
                        className="mx-2 px-2 py-1 border-b-2 border-brand-primary w-32 text-center font-bold outline-none bg-slate-50 focus:bg-white"
                        placeholder="?"
                     />
                     <span>{parts[1]}</span>
                     {!feedback && (
                        <button onClick={() => handleSubmit(inputVal)} className="block mx-auto mt-6 bg-brand-primary text-white px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Verificar</button>
                     )}
                 </div>
             );
        }

        // 3. Numeric / Input
        if (question.type === 'numeric' || question.type === 'input') {
            return (
                <div className="w-full max-w-sm animate-fade-in">
                    {question.latex && <div className="text-xl text-center mb-6"><LatexText text={question.latex} /></div>}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !feedback && inputVal && handleSubmit(inputVal)}
                            disabled={!!feedback}
                            placeholder="Sua resposta..."
                            className="flex-1 p-4 border-2 border-slate-300 rounded-xl font-bold text-center outline-none focus:border-brand-primary transition-colors"
                        />
                        {!feedback && (
                            <button 
                                onClick={() => handleSubmit(inputVal)}
                                disabled={!inputVal}
                                className="bg-brand-primary text-white px-6 rounded-xl font-bold hover:bg-brand-dark shadow-lg transition-transform active:scale-95 disabled:opacity-50"
                            >
                                OK
                            </button>
                        )}
                    </div>
                </div>
            );
        }

        // 4. Multiple Choice (Default)
        return (
            <div className="w-full animate-fade-in">
                {question.latex && <div className="text-xl text-center mb-6"><LatexText text={question.latex} /></div>}
                <div className="grid gap-3">
                    {question.options?.map((opt, i) => (
                        <button
                            key={i}
                            disabled={!!feedback}
                            onClick={() => handleSubmit(opt)}
                            className={`p-4 rounded-xl border-b-4 font-bold text-left transition-all active:border-b-0 active:translate-y-1 ${
                                feedback 
                                    ? opt.toLowerCase() === question.answer.toLowerCase() 
                                        ? 'bg-emerald-100 border-emerald-500 text-emerald-800' // Correct answer shown
                                        : 'bg-slate-50 border-slate-200 opacity-50' // Others dimmed
                                    : 'bg-white border-slate-200 hover:border-brand-primary hover:bg-indigo-50 text-slate-700'
                            }`}
                        >
                            <LatexText text={opt} />
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-slide-up">
                {/* Header with Progress Bar */}
                <div className="p-6 border-b border-slate-100 bg-slate-50">
                    <div className="flex justify-between items-center mb-2">
                         <button onClick={onExit} className="text-slate-400 font-black hover:text-red-500 transition-colors text-xl">✕</button>
                         <div className="text-xs font-black uppercase tracking-widest text-brand-primary">
                            Questão {qIndex + 1} de {totalQuestions}
                         </div>
                         <div className="w-5"></div> {/* Spacer for alignment */}
                    </div>
                    <ProgressBar current={qIndex + 1} total={totalQuestions} />
                </div>
                
                {/* Content Area */}
                <div className="p-8 flex-grow overflow-y-auto flex flex-col items-center justify-center">
                    {question?.prompt && (
                        <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-8 leading-relaxed">
                            <LatexText text={question.prompt} />
                        </h2>
                    )}
                    {renderContent()}
                </div>

                {/* Feedback Area */}
                {feedback && (
                    <div className={`p-6 border-t-2 animate-slide-up ${feedback.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex flex-col gap-2">
                            <div className="font-black text-xl flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${feedback.correct ? 'bg-emerald-500' : 'bg-red-500'}`}>
                                    {feedback.correct ? '✓' : '✕'}
                                </div>
                                <span className={feedback.correct ? 'text-emerald-700' : 'text-red-700'}>
                                    {feedback.correct ? 'Correto!' : 'Incorreto'}
                                </span>
                            </div>
                            <div className="text-slate-600 mb-4 pl-10 leading-relaxed">
                                <LatexText text={feedback.text} />
                            </div>
                        </div>
                        <button 
                            onClick={handleNext} 
                            className={`w-full py-4 rounded-xl font-black text-white text-lg shadow-lg hover:-translate-y-1 transition-all uppercase tracking-wide
                                ${feedback.correct ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-900/20' : 'bg-red-500 hover:bg-red-600 shadow-red-900/20'}
                            `}
                        >
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
    
    // NAVIGATION STATE
    const [view, setView] = useState<ViewState>('HOME');
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
    const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null); // Equivalent to "Level"
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

    // Derived State Helpers
    const getTrack = () => lessonsData.tracks.find(t => t.id === selectedTrackId);
    const getModule = () => getTrack()?.modules.find(m => m.id === selectedModuleId);

    // --- LOGIC ---

    const handleLessonComplete = (xpEarned: number, success: boolean) => {
        if (success && activeLesson) {
             setProgress(prev => {
                 const isReplay = prev.completedLessons.includes(activeLesson.id);
                 return {
                     ...prev,
                     xp: prev.xp + (isReplay ? 0 : xpEarned),
                     completedLessons: isReplay ? prev.completedLessons : [...prev.completedLessons, activeLesson.id],
                     streak: prev.streak + 1
                 };
             });
        } else {
             setProgress(prev => ({ ...prev, hearts: Math.max(0, prev.hearts - 1), streak: 0 }));
        }
        setActiveLesson(null);
        // Return to lesson list
        setView('LESSONS');
    };

    // --- VIEWS ---

    const renderHome = () => (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            <div className="w-24 h-24 bg-brand-primary rounded-3xl flex items-center justify-center text-white text-5xl font-black mb-6 shadow-2xl transform -rotate-6">
                E
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                ECONO<span className="text-amber-400">QUEST</span>
            </h1>
            <p className="text-indigo-200 text-lg mb-12 max-w-md">
                Domine a economia real através de missões gamificadas.
            </p>
            
            <button 
                onClick={() => setView('TRACKS')}
                className="bg-brand-success text-white px-12 py-4 rounded-2xl font-black text-xl shadow-lg shadow-emerald-900/20 hover:scale-105 transition-transform active:scale-95"
            >
                COMEÇAR JORNADA
            </button>
        </div>
    );

    const renderTracks = () => (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-white text-2xl font-bold mb-6 text-center">Escolha sua Trilha</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {lessonsData.tracks.map(track => (
                    <button
                        key={track.id}
                        onClick={() => {
                            setSelectedTrackId(track.id);
                            setView('LEVELS');
                        }}
                        className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform text-left group border-b-8 border-slate-200 active:border-b-0 active:translate-y-0"
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{track.icon}</div>
                        <h3 className="text-xl font-black text-slate-800 mb-2">{track.title}</h3>
                        <p className="text-slate-500 text-sm">{track.description}</p>
                    </button>
                ))}
            </div>
            <button onClick={() => setView('HOME')} className="mt-8 text-white/50 font-bold hover:text-white block mx-auto">← VOLTAR</button>
        </div>
    );

    const renderLevels = () => {
        const track = getTrack();
        if (!track) return null;

        return (
            <div className="max-w-2xl mx-auto p-6">
                <div className="flex items-center gap-4 mb-8 text-white">
                     <button onClick={() => setView('TRACKS')} className="opacity-50 hover:opacity-100 font-bold">← TRILHAS</button>
                     <h2 className="text-2xl font-bold flex-1 text-center">{track.title}</h2>
                     <div className="w-16"></div> {/* Spacer */}
                </div>

                <div className="space-y-4">
                    {track.modules.map((mod, index) => {
                        // Logic: Level 1 always unlocked. Others require previous module completion.
                        let isUnlocked = true;
                        if (index > 0) {
                            const prevModule = track.modules[index - 1];
                            const allPrevComplete = prevModule.lessons.every(l => progress.completedLessons.includes(l.id));
                            isUnlocked = allPrevComplete;
                        }
                        if (index === 0) isUnlocked = true;

                        return (
                            <button
                                key={mod.id}
                                disabled={!isUnlocked}
                                onClick={() => {
                                    setSelectedModuleId(mod.id);
                                    setView('LESSONS');
                                }}
                                className={`w-full p-6 rounded-2xl flex items-center justify-between transition-all ${
                                    isUnlocked 
                                        ? 'bg-white text-slate-800 shadow-lg hover:bg-indigo-50 cursor-pointer' 
                                        : 'bg-slate-800/50 text-slate-500 border-2 border-slate-700 cursor-not-allowed'
                                }`}
                            >
                                <div className="text-left">
                                    <h3 className="font-black text-lg">{mod.title}</h3>
                                    <p className="text-sm opacity-70">{mod.description}</p>
                                </div>
                                <div className="text-2xl">
                                    {isUnlocked ? '➔' : '🔒'}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderLessonList = () => {
        const mod = getModule();
        if (!mod) return null;

        return (
            <div className="max-w-2xl mx-auto p-6 pb-20">
                <div className="flex items-center gap-4 mb-8 text-white">
                     <button onClick={() => setView('LEVELS')} className="opacity-50 hover:opacity-100 font-bold">← NÍVEIS</button>
                     <h2 className="text-xl font-bold flex-1 text-center">{mod.title}</h2>
                     <div className="w-16"></div> 
                </div>

                <div className="flex flex-col items-center gap-6">
                    {mod.lessons.map((lesson, idx) => {
                        const isCompleted = progress.completedLessons.includes(lesson.id);
                        // Is unlocked if it's the first one OR previous one is completed
                        const isUnlocked = idx === 0 || progress.completedLessons.includes(mod.lessons[idx - 1].id);
                        
                        return (
                            <div key={lesson.id} className="relative flex flex-col items-center group">
                                {/* Connector Line */}
                                {idx > 0 && <div className={`w-2 h-8 bg-slate-700 -mt-2 -mb-2 z-0`} />}
                                
                                <button
                                    disabled={!isUnlocked}
                                    onClick={() => setActiveLesson(lesson)}
                                    className={`
                                        w-20 h-20 rounded-full border-b-8 flex items-center justify-center text-3xl z-10 transition-transform
                                        ${isCompleted 
                                            ? 'bg-emerald-500 border-emerald-700 text-white' 
                                            : isUnlocked 
                                                ? 'bg-brand-primary border-indigo-800 text-white hover:scale-110 active:scale-95' 
                                                : 'bg-slate-700 border-slate-800 text-slate-500 cursor-not-allowed'}
                                    `}
                                >
                                    {isCompleted ? '✔' : isUnlocked ? '★' : '🔒'}
                                </button>
                                
                                {/* Floating Label */}
                                <div className={`mt-2 bg-white px-3 py-1 rounded-lg text-sm font-bold shadow-md transition-opacity ${isUnlocked ? 'opacity-100' : 'opacity-50'}`}>
                                    {lesson.title}
                                </div>
                            </div>
                        );
                    })}
                    
                    <div className="w-24 mt-8 text-center text-white/50 text-sm font-bold">
                        🏆<br/>Final do Nível
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-900 font-sans selection:bg-brand-primary selection:text-white">
            {/* GLOBAL HEADER (Except on Home) */}
            {view !== 'HOME' && view !== 'QUIZ' && (
                <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-white/10 p-4">
                    <div className="max-w-5xl mx-auto flex justify-between items-center">
                        <div className="font-black text-white text-xl tracking-tight cursor-pointer" onClick={() => setView('HOME')}>
                            ECONO<span className="text-amber-400">QUEST</span>
                        </div>
                        <HeaderStats progress={progress} />
                    </div>
                </div>
            )}

            {/* MAIN CONTENT AREA */}
            <main className="animate-fade-in">
                {view === 'HOME' && renderHome()}
                {view === 'TRACKS' && renderTracks()}
                {view === 'LEVELS' && renderLevels()}
                {view === 'LESSONS' && renderLessonList()}
            </main>

            {/* QUIZ MODAL OVERLAY */}
            {activeLesson && (
                <QuizView 
                    lesson={activeLesson}
                    onComplete={handleLessonComplete}
                    onExit={() => setActiveLesson(null)}
                />
            )}
        </div>
    );
}
