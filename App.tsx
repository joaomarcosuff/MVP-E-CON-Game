
import React, { useState, useEffect } from 'react';
import { Track, Module, Lesson, Question, PlayerProgress, GameData } from './types';
import { lessonsData } from './lessonsData';
import { progressionRules } from './progressionRules';

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

// --- COMPONENTS ---

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
    const width = Math.min(100, (current / total) * 100);
    return (
        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div 
                className="h-full bg-brand-success transition-all duration-500 ease-out"
                style={{ width: `${width}%` }}
            />
        </div>
    );
};

const HeartDisplay: React.FC<{ hearts: number }> = ({ hearts }) => (
    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
        <span className="text-red-500 text-xl">❤️</span>
        <span className="font-bold text-slate-700">{hearts}</span>
    </div>
);

const XPDisplay: React.FC<{ xp: number }> = ({ xp }) => {
    // Visual level progress (e.g., every 100 XP fills the bar)
    const levelProgress = xp % 100;
    
    return (
        <div className="flex flex-col w-28">
             <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                <div className="flex items-center gap-1">
                    <span className="text-amber-500 text-base">⚡</span>
                    <span className="text-slate-700 text-sm">{xp}</span>
                </div>
                <span className="text-[10px] uppercase opacity-70">Nível {Math.floor(xp / 100) + 1}</span>
             </div>
             <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden border border-slate-100">
                <div 
                    className="h-full bg-amber-400 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                    style={{ width: `${levelProgress}%` }}
                />
            </div>
        </div>
    );
};

// --- MAP COMPONENTS ---

const LessonNode: React.FC<{ 
    lesson: Lesson; 
    status: 'locked' | 'active' | 'completed'; 
    onClick: () => void 
}> = ({ lesson, status, onClick }) => {
    // Visual styles based on status
    const styles = {
        locked: "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed",
        active: "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/40 scale-110 ring-4 ring-indigo-100 animate-pulse",
        completed: "bg-emerald-500 border-emerald-600 text-white shadow-md shadow-emerald-500/20"
    };

    const icon = {
        locked: "🔒",
        active: "▶",
        completed: "✔"
    };

    return (
        <div className="flex flex-col items-center group relative z-10">
            {/* The Node Circle */}
            <button 
                onClick={onClick}
                disabled={status === 'locked'}
                className={`
                    w-16 h-16 rounded-full border-b-4 flex items-center justify-center text-2xl font-bold
                    transition-all duration-200 transform
                    ${styles[status]}
                    ${status !== 'locked' ? 'hover:scale-110 active:scale-95' : ''}
                `}
            >
                {icon[status]}
            </button>
            
            {/* Floating Label (Tooltip-ish) */}
            <div className={`
                absolute top-20 w-48 text-center p-2 rounded-xl bg-white border-2 border-slate-100 shadow-xl
                transition-all duration-200 z-20 pointer-events-none
                ${status === 'locked' ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}
            `}>
                <h4 className="font-bold text-slate-800 text-sm leading-tight">{lesson.title}</h4>
                {status === 'active' && (
                    <div className="text-xs text-brand-primary font-bold mt-1">COMEÇAR</div>
                )}
            </div>
        </div>
    );
};

const QuizView: React.FC<{
    lesson: Lesson;
    onComplete: (xpEarned: number, success: boolean) => void;
    onExit: () => void;
}> = ({ lesson, onComplete, onExit }) => {
    const [qIndex, setQIndex] = useState(0);
    const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
    const [inputVal, setInputVal] = useState('');
    const [correctCount, setCorrectCount] = useState(0);

    const question = lesson.questions[qIndex];

    const handleSubmit = (ans: string) => {
        const isCorrect = ans.trim().toLowerCase() === question.answer.toLowerCase();
        
        if (isCorrect) setCorrectCount(prev => prev + 1);

        setFeedback({
            correct: isCorrect,
            text: isCorrect 
                ? (question.feedback || "✅ Correto! Mandou bem.") 
                : `❌ Tente novamente. A resposta era: ${question.answer}`
        });
    };

    const handleNext = () => {
        setFeedback(null);
        setInputVal('');
        if (qIndex < lesson.questions.length - 1) {
            setQIndex(prev => prev + 1);
        } else {
            // Lesson Finished
            // Calculate Accuracy
            // Note: feedback logic above ensures user moves to next question after attempt, 
            // so correctCount is accurate for "First Try" accuracy.
            const accuracy = (correctCount + (feedback?.correct ? 0 : 0)) / lesson.questions.length; // Add last feedback state if it was the last question
            
            // Re-calculate correctness for the very last question since state update might lag or we are in the handler
            // Actually, correctCount updates before this, but let's be safe.
            // Simplified: If the current feedback is correct, correctCount has already been incremented.
            
            const finalCorrectCount = correctCount; // + (feedback?.correct ? 0 : 0); 
            // Wait, setCorrectCount is async. But inside the event handler of "Continuar", 
            // if we clicked verify, state updated. Then we click continue. So correctCount is up to date.
            
            const finalAccuracy = finalCorrectCount / lesson.questions.length;
            const success = finalAccuracy >= progressionRules.unlock_logic.min_accuracy_to_unlock;
            
            let xp = 0;
            if (success) {
                // Base XP logic
                xp = lesson.questions.length * progressionRules.xp_system.base_xp_per_question;
                xp += progressionRules.xp_system.lesson_completion_bonus;
                
                // Perfect Bonus
                if (finalCorrectCount === lesson.questions.length) {
                    xp += progressionRules.xp_system.perfect_lesson_bonus;
                }
            }
            onComplete(xp, success);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <button onClick={onExit} className="text-slate-400 hover:text-red-500 font-bold transition-colors">✕</button>
                    <div className="w-1/2">
                        <ProgressBar current={qIndex + (feedback ? 1 : 0)} total={lesson.questions.length} />
                    </div>
                    <div className="text-slate-400 font-bold text-sm">XP Potencial: {lesson.xp}</div>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto flex-grow flex flex-col items-center justify-center">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800 text-center mb-8 leading-relaxed">
                        {question.prompt}
                    </h2>

                    {question.type === 'multiple_choice' && question.options && (
                        <div className="grid grid-cols-1 gap-3 w-full">
                            {question.options.map((opt, i) => (
                                <button
                                    key={i}
                                    disabled={!!feedback}
                                    onClick={() => handleSubmit(opt)}
                                    className={`
                                        p-4 rounded-xl border-b-4 font-bold text-left transition-all
                                        ${feedback 
                                            ? (opt === question.answer 
                                                ? 'bg-emerald-100 border-emerald-500 text-emerald-900' 
                                                : opt === inputVal // if this was the wrong selection
                                                    ? 'bg-red-100 border-red-500 text-red-900'
                                                    : 'bg-slate-50 border-slate-100 opacity-50')
                                            : 'bg-white border-slate-200 hover:border-brand-primary hover:bg-indigo-50 text-slate-700 active:border-b-0 active:translate-y-1'
                                        }
                                    `}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}

                    {question.type === 'input' && (
                        <div className="w-full flex flex-col gap-4">
                            <input
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                disabled={!!feedback}
                                placeholder="Digite sua resposta..."
                                className="w-full p-4 text-lg border-2 border-slate-300 rounded-xl focus:border-brand-primary outline-none font-bold text-center"
                            />
                            {!feedback && (
                                <button 
                                    onClick={() => handleSubmit(inputVal)}
                                    disabled={!inputVal}
                                    className="bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-dark disabled:opacity-50 transition-colors"
                                >
                                    Verificar
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer / Feedback */}
                {feedback && (
                    <div className={`p-6 border-t-2 animate-slide-up ${feedback.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${feedback.correct ? 'bg-emerald-500' : 'bg-red-500'}`}>
                                    {feedback.correct ? '✓' : '✕'}
                                </div>
                                <h3 className={`font-bold text-lg ${feedback.correct ? 'text-emerald-700' : 'text-red-700'}`}>
                                    {feedback.correct ? 'Correto!' : 'Incorreto'}
                                </h3>
                            </div>
                        </div>
                        <p className={`mb-4 ${feedback.correct ? 'text-emerald-600' : 'text-red-600'}`}>{feedback.text}</p>
                        <button 
                            onClick={handleNext}
                            className={`w-full py-3 rounded-xl font-bold text-white shadow-lg transition-transform hover:-translate-y-1 ${feedback.correct ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-red-500 hover:bg-red-600'}`}
                        >
                            Continuar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function App() {
    const [progress, setProgress] = usePlayerProgress();
    const [activeTrack, setActiveTrack] = useState<Track | null>(null);
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

    // Load initial track
    useEffect(() => {
        if (!activeTrack && lessonsData.tracks.length > 0) {
            setActiveTrack(lessonsData.tracks[0]);
        }
    }, [activeTrack]);

    const handleLessonComplete = (xpEarned: number, success: boolean) => {
        if (success && activeLesson) {
             setProgress(prev => {
                 // Rule: Never reward twice the same lesson.
                 const isReplay = prev.completedLessons.includes(activeLesson.id);
                 const finalXp = isReplay ? 0 : xpEarned;

                 return {
                     ...prev,
                     xp: prev.xp + finalXp,
                     completedLessons: isReplay 
                        ? prev.completedLessons 
                        : [...prev.completedLessons, activeLesson.id],
                     streak: prev.streak + 1
                 };
             });
        } else {
             // Reset streak on failure
             setProgress(prev => ({
                ...prev,
                hearts: Math.max(0, prev.hearts - 1),
                streak: 0
             }));
        }
        setActiveLesson(null);
    };

    // --- GAME LOGIC FOR MAP ---

    // Logic: A lesson is locked if the previous lesson IN THE SAME TRACK is not completed.
    // If it is the first lesson of the track, it is unlocked.
    const getLessonStatus = (lessonId: string, trackLessons: Lesson[]): 'locked' | 'active' | 'completed' => {
        if (progress.completedLessons.includes(lessonId)) {
            return 'completed';
        }

        const index = trackLessons.findIndex(l => l.id === lessonId);
        
        // If first lesson of track, and not completed, it is active
        if (index === 0) return 'active';

        // Check previous lesson
        const prevLessonId = trackLessons[index - 1].id;
        if (progress.completedLessons.includes(prevLessonId)) {
            return 'active';
        }

        return 'locked';
    };

    if (!activeTrack) return <div className="flex h-screen items-center justify-center">Carregando mapa...</div>;

    return (
        <div className="min-h-screen bg-slate-900 text-slate-800 font-sans pb-20">
            {/* Header */}
            <header className="sticky top-0 z-30 w-full p-4">
                <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-3 flex justify-between items-center">
                   <div className="flex items-center gap-2">
                       <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transform -rotate-3">E</div>
                       <span className="hidden md:inline font-bold text-slate-700 tracking-tight">ECONOQUEST</span>
                   </div>
                   
                   <div className="flex gap-4 md:gap-8 items-center">
                       <HeartDisplay hearts={progress.hearts} />
                       
                       <div className="flex items-center gap-1 px-3 py-2 bg-orange-100/50 rounded-xl border border-orange-200">
                           <span className="text-xl">🔥</span>
                           <span className="font-bold text-orange-700">{progress.streak}</span>
                       </div>

                       <XPDisplay xp={progress.xp} />
                   </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6">
                
                {/* Sidebar / Track Selector */}
                <aside className="w-full md:w-64 flex-shrink-0 space-y-4">
                    <h3 className="text-slate-400 font-bold uppercase text-xs tracking-wider ml-2">Suas Trilhas</h3>
                    {lessonsData.tracks.map(track => (
                        <button 
                            key={track.id}
                            onClick={() => setActiveTrack(track)}
                            className={`
                                w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-200 border-2
                                ${activeTrack.id === track.id 
                                    ? 'bg-brand-primary border-brand-primary text-white shadow-lg scale-105' 
                                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:border-slate-600'
                                }
                            `}
                        >
                            <span className="text-2xl">{track.icon}</span>
                            <div className="text-left leading-tight">
                                <div className="font-bold">{track.title}</div>
                            </div>
                        </button>
                    ))}
                    
                    <div className="bg-slate-800 rounded-2xl p-6 mt-8 border border-slate-700">
                        <h4 className="text-white font-bold mb-2">Liga Bronze</h4>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-yellow-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">1</div>
                            <div className="text-slate-300 text-sm">João (Você)</div>
                            <div className="ml-auto text-brand-accent font-bold">{progress.xp} XP</div>
                        </div>
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 w-3/4"></div>
                        </div>
                    </div>
                </aside>

                {/* Main Content: The Gamified Map */}
                <div className="flex-grow">
                    {/* Track Intro Header */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden mb-10">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black mb-2">{activeTrack.title}</h2>
                            <p className="opacity-80 max-w-lg text-indigo-100">{activeTrack.description}</p>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-20 text-9xl transform translate-x-10 translate-y-10 filter blur-sm">
                            {activeTrack.icon}
                        </div>
                    </div>

                    {/* The Path */}
                    <div className="flex flex-col items-center space-y-4 pb-20">
                        {activeTrack.modules.map((module) => (
                            <div key={module.id} className="w-full flex flex-col items-center">
                                {/* Module Header */}
                                <div className="mb-8 mt-4 text-center">
                                    <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-1">{module.title}</h3>
                                    <div className="h-1 w-12 bg-slate-700 mx-auto rounded-full"></div>
                                </div>

                                {/* Lessons in this module */}
                                <div className="flex flex-col items-center">
                                    {module.lessons.map((lesson, index) => {
                                        // Calculate status for this specific track context
                                        const trackFlatLessons = activeTrack.modules.flatMap(m => m.lessons);
                                        const status = getLessonStatus(lesson.id, trackFlatLessons);
                                        
                                        return (
                                            <React.Fragment key={lesson.id}>
                                                {/* Connector Line (if not first item in this visual block) */}
                                                {(index > 0 || activeTrack.modules.indexOf(module) > 0) && (
                                                     <div className={`w-2 h-12 mb-2 rounded-full ${status === 'locked' ? 'bg-slate-700' : 'bg-brand-primary/50'}`}></div>
                                                )}
                                                
                                                <LessonNode 
                                                    lesson={lesson} 
                                                    status={status}
                                                    onClick={() => setActiveLesson(lesson)}
                                                />
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                                
                                {/* Connector between modules */}
                                <div className="w-2 h-12 mt-2 rounded-full bg-slate-700"></div>
                            </div>
                        ))}
                         
                         <div className="mt-8 text-slate-500 font-bold flex flex-col items-center gap-2">
                             <div className="text-3xl">🏆</div>
                             <p>Final da Trilha</p>
                         </div>
                    </div>
                </div>
            </main>

            {/* Quiz Modal */}
            {activeLesson && (
                <QuizView 
                    lesson={activeLesson} 
                    onExit={() => setActiveLesson(null)} 
                    onComplete={handleLessonComplete}
                />
            )}
        </div>
    );
}
