
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

const XPDisplay: React.FC<{ xp: number }> = ({ xp }) => (
    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
        <span className="text-amber-500 text-xl">⚡</span>
        <span className="font-bold text-slate-700">{xp}</span>
    </div>
);

const LessonCard: React.FC<{ 
    lesson: Lesson; 
    isLocked: boolean; 
    isCompleted: boolean; 
    onClick: () => void 
}> = ({ lesson, isLocked, isCompleted, onClick }) => {
    return (
        <button 
            onClick={onClick}
            disabled={isLocked}
            className={`
                relative w-full text-left p-5 rounded-2xl border-b-4 transition-all duration-200
                flex items-center justify-between group
                ${isLocked 
                    ? 'bg-slate-100 border-slate-200 opacity-60 cursor-not-allowed' 
                    : isCompleted
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-900 hover:bg-emerald-200'
                        : 'bg-white border-slate-200 hover:border-brand-primary hover:-translate-y-1 hover:shadow-lg'
                }
            `}
        >
            <div>
                <h4 className="font-bold text-lg mb-1">{lesson.title}</h4>
                <p className="text-sm opacity-80">{lesson.description}</p>
            </div>
            <div className={`
                w-10 h-10 rounded-full flex items-center justify-center text-xl
                ${isLocked ? 'bg-slate-200 text-slate-400' : isCompleted ? 'bg-emerald-500 text-white' : 'bg-brand-primary text-white'}
            `}>
                {isLocked ? '🔒' : isCompleted ? '✓' : '▶'}
            </div>
        </button>
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
            text: isCorrect ? (question.feedback || "Correto!") : `Incorreto. A resposta é: ${question.answer}`
        });
    };

    const handleNext = () => {
        setFeedback(null);
        setInputVal('');
        if (qIndex < lesson.questions.length - 1) {
            setQIndex(prev => prev + 1);
        } else {
            // Lesson Finished
            const accuracy = (correctCount + (feedback?.correct ? 0 : 0)) / lesson.questions.length;
            const success = accuracy >= progressionRules.unlock_logic.min_accuracy_to_unlock;
            
            let xp = 0;
            if (success) {
                // Base XP logic
                xp = lesson.questions.length * progressionRules.xp_system.base_xp_per_question;
                xp += progressionRules.xp_system.lesson_completion_bonus;
            }
            onComplete(xp, success);
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <button onClick={onExit} className="text-slate-400 hover:text-red-500 font-bold">✕</button>
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
                                        p-4 rounded-xl border-2 font-bold text-left transition-all
                                        ${feedback 
                                            ? (opt === question.answer 
                                                ? 'bg-emerald-100 border-emerald-500 text-emerald-900' 
                                                : opt === inputVal // if this was the wrong selection
                                                    ? 'bg-red-100 border-red-500 text-red-900'
                                                    : 'bg-slate-50 border-slate-100 opacity-50')
                                            : 'bg-white border-slate-200 hover:border-brand-primary hover:bg-indigo-50 text-slate-700'
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
                                    className="bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-brand-dark disabled:opacity-50"
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
    const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

    // Helper to check if lesson is completed
    const isLessonCompleted = (id: string) => progress.completedLessons.includes(id);
    
    // Helper to check if lesson is locked
    const isLessonLocked = (lessonId: string, moduleLessons: Lesson[]) => {
        // Logic: if it's the first lesson of the first module, it's unlocked.
        // Or if previous lesson is completed.
        // For simplicity, let's just use the order in the array.
        const flatLessons = lessonsData.tracks.flatMap(t => t.modules.flatMap(m => m.lessons));
        const idx = flatLessons.findIndex(l => l.id === lessonId);
        if (idx <= 0) return false;
        const prevLesson = flatLessons[idx - 1];
        return !isLessonCompleted(prevLesson.id);
    };

    const handleLessonComplete = (xpEarned: number, success: boolean) => {
        if (success && activeLesson) {
             setProgress(prev => ({
                 ...prev,
                 xp: prev.xp + xpEarned,
                 completedLessons: prev.completedLessons.includes(activeLesson.id) 
                    ? prev.completedLessons 
                    : [...prev.completedLessons, activeLesson.id]
             }));
        }
        setActiveLesson(null);
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
            {/* Header */}
            <header className="bg-white p-4 shadow-sm sticky top-0 z-10 flex justify-between items-center">
                <h1 className="text-2xl font-black text-brand-primary tracking-tighter">EconoQuest</h1>
                <div className="flex gap-4">
                    <HeartDisplay hearts={progress.hearts} />
                    <XPDisplay xp={progress.xp} />
                </div>
            </header>

            {/* Dashboard or Quiz */}
            {activeLesson ? (
                <QuizView 
                    lesson={activeLesson} 
                    onComplete={handleLessonComplete}
                    onExit={() => setActiveLesson(null)} 
                />
            ) : (
                <div className="max-w-md mx-auto p-4 space-y-8 pb-20">
                    {lessonsData.tracks.map(track => (
                        <div key={track.id} className="space-y-4">
                             <div className="flex items-center gap-3 mb-2">
                                <span className="text-3xl">{track.icon}</span>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-700">{track.title}</h2>
                                    <p className="text-slate-500 text-sm">{track.description}</p>
                                </div>
                             </div>
                             
                             {track.modules.map(module => (
                                 <div key={module.id} className="space-y-3">
                                     <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">{module.title}</h3>
                                     {module.lessons.map(lesson => (
                                         <LessonCard 
                                            key={lesson.id}
                                            lesson={lesson}
                                            isCompleted={isLessonCompleted(lesson.id)}
                                            isLocked={isLessonLocked(lesson.id, module.lessons)}
                                            onClick={() => setActiveLesson(lesson)}
                                         />
                                     ))}
                                 </div>
                             ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}