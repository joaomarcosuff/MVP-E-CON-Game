import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, googleProvider } from './firebaseClient';
import { PlayerData, Option, Question, SimulationStep, GraphState, GamePhase } from './types';
import { phase1Questions, generateMundellFlemingLogic, getBpType } from './data';

const App: React.FC = () => {
    // --- State Management ---
    const [user, setUser] = useState<User | null>(null);
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [phase, setPhase] = useState<GamePhase>('intro');
    const [error, setError] = useState<string | null>(null);

    // Quiz State (Phase 1)
    const [p1Index, setP1Index] = useState(0);
    const [p1Score, setP1Score] = useState(0);
    const [p1Feedback, setP1Feedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
    const [p1HintVisible, setP1HintVisible] = useState(false);

    // Simulation State (Phase 2)
    const [p2Setup, setP2Setup] = useState({ regime: 'fixo', mobility: 'perfeita', policy: 'fiscal_exp' });
    const [simulationSteps, setSimulationSteps] = useState<SimulationStep[]>([]);
    const [p2Index, setP2Index] = useState(0);
    const [graphState, setGraphState] = useState<GraphState>({ isShift: 0, lmShift: 0, bpType: 'horizontal', animStage: 0 });
    const [p2Feedback, setP2Feedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
    const [p2HintVisible, setP2HintVisible] = useState(false);
    
    // Canvas Ref
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // --- Authentication & Firestore Logic ---
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                try {
                    const userRef = doc(db, "usuarios", currentUser.uid);
                    const userSnap = await getDoc(userRef);

                    if (userSnap.exists()) {
                        setPlayerData(userSnap.data() as PlayerData);
                    } else {
                        // Create New User Document
                        const newUserData: PlayerData = {
                            nome: currentUser.displayName || "Economista",
                            moedas: 0,
                            nivel: 1,
                            xp: 0
                        };
                        await setDoc(userRef, newUserData);
                        setPlayerData(newUserData);
                    }
                } catch (err: any) {
                    console.error("Firestore Error:", err);
                    setError("Erro ao carregar dados do usuário.");
                }
            } else {
                setUser(null);
                setPlayerData(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async () => {
        setError(null);
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        window.location.reload();
    };

    const updateCoins = async (amount: number) => {
        if (!user || !playerData) return;
        const newCoins = playerData.moedas + amount;
        setPlayerData({ ...playerData, moedas: newCoins });
        try {
            const userRef = doc(db, "usuarios", user.uid);
            await updateDoc(userRef, { moedas: newCoins });
        } catch (err) {
            console.error("Failed to sync coins", err);
        }
    };

    // --- Game Logic: Phase 1 ---
    const startPhase1 = () => {
        setPhase('phase1');
        setP1Index(0);
        setP1Score(0);
        setP1Feedback(null);
        setP1HintVisible(false);
    };

    const handleP1Answer = (option: Option, question: Question) => {
        if (p1Feedback) return; // Prevent multiple clicks

        if (option.correct) {
            setP1Score(prev => prev + 1);
            updateCoins(100);
            setP1Feedback({ isCorrect: true, text: question.explanation });
        } else {
            setP1Feedback({ isCorrect: false, text: `A alternativa correta era diferente. Explicação: ${question.explanation}` });
        }
    };

    const nextP1Question = () => {
        if (p1Index < phase1Questions.length - 1) {
            setP1Index(prev => prev + 1);
            setP1Feedback(null);
            setP1HintVisible(false);
        } else {
            setPhase('phase1Result');
        }
    };

    // --- Game Logic: Phase 2 ---
    const startPhase2Setup = () => {
        setPhase('phase2Setup');
    };

    const runSimulation = () => {
        const steps = generateMundellFlemingLogic(p2Setup.regime, p2Setup.mobility, p2Setup.policy);
        setSimulationSteps(steps);
        setGraphState({ 
            isShift: 0, 
            lmShift: 0, 
            bpType: getBpType(p2Setup.mobility), 
            animStage: 0 
        });
        setP2Index(0);
        setP2Feedback(null);
        setP2HintVisible(false);
        setPhase('phase2Game');
    };

    const handleP2Answer = (option: Option) => {
        if (p2Feedback) return;

        const currentStep = simulationSteps[p2Index];
        
        if (option.correct) {
            updateCoins(50);
            setP2Feedback({ isCorrect: true, text: "Correto!" });
            // Set targets for animation if correct
            if (currentStep.targetState) {
                setGraphState(prev => ({
                    ...prev,
                    targetIS: currentStep.targetState!.isShift,
                    targetLM: currentStep.targetState!.lmShift
                }));
            }
        } else {
            setP2Feedback({ isCorrect: false, text: "Resposta incorreta." });
             if (currentStep.targetState) {
                setGraphState(prev => ({
                    ...prev,
                    targetIS: currentStep.targetState!.isShift,
                    targetLM: currentStep.targetState!.lmShift
                }));
            }
        }
    };

    const nextP2Step = () => {
        // Apply shifts permanently
        setGraphState(prev => ({
            ...prev,
            isShift: prev.targetIS !== undefined ? prev.targetIS : prev.isShift,
            lmShift: prev.targetLM !== undefined ? prev.targetLM : prev.lmShift,
            targetIS: undefined,
            targetLM: undefined
        }));

        if (p2Index < simulationSteps.length - 1) {
            setP2Index(prev => prev + 1);
            setP2Feedback(null);
            setP2HintVisible(false);
        } else {
            setPhase('phase2Result');
        }
    };

    const playGraphAnimation = () => {
        if (!simulationSteps[p2Index].targetState) return;

        setGraphState(prev => ({ ...prev, animStage: 0 }));
        
        // Simple animation sequence simulation
        setTimeout(() => {
            setGraphState(prev => ({ 
                ...prev, 
                isShift: prev.targetIS!, 
                lmShift: prev.targetLM!,
                animStage: 1 
            }));
        }, 800);

        setTimeout(() => {
            setGraphState(prev => ({ 
                ...prev, 
                // Revert visual to base state (actual commit happens on Next) or keep visual?
                // Keeping visual for feedback
                animStage: 0
            }));
        }, 2000);
    };

    // --- Drawing Canvas ---
    const drawGraph = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width;
        const height = canvas.height;
        const origin = { x: 50, y: height - 50 };

        ctx.clearRect(0, 0, width, height);

        // Grid
        ctx.strokeStyle = "#f1f5f9"; ctx.lineWidth = 1;
        for (let i = 0; i < width; i += 40) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, height); ctx.stroke(); }
        for (let i = 0; i < height; i += 40) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(width, i); ctx.stroke(); }

        // Axes
        ctx.beginPath();
        ctx.moveTo(origin.x, 20); ctx.lineTo(origin.x, origin.y); ctx.lineTo(width - 20, origin.y);
        ctx.lineWidth = 2; ctx.strokeStyle = "#334155"; ctx.stroke();
        ctx.font = "bold 12px Poppins"; ctx.fillStyle = "#334155";
        ctx.fillText("i (Juros)", origin.x + 10, 30); ctx.fillText("Y (Renda)", width - 60, origin.y - 10);

        if (graphState.animStage === 1) {
            ctx.fillStyle = "#f59e0b"; ctx.fillText("⚠️ Desequilíbrio!", 60, 60);
        }

        const shift = 40;

        // BP Curve
        ctx.strokeStyle = "#16a34a"; ctx.lineWidth = 3; ctx.beginPath();
        let bpY = origin.y - 150;
        if (graphState.bpType === 'horizontal') { ctx.moveTo(origin.x, bpY); ctx.lineTo(width, bpY); }
        else if (graphState.bpType === 'vertical') { ctx.moveTo(width / 2, 20); ctx.lineTo(width / 2, origin.y); }
        else if (graphState.bpType === 'flat') { ctx.moveTo(origin.x, bpY + 50); ctx.lineTo(width, bpY - 50); }
        else { ctx.moveTo(width / 2 - 60, origin.y); ctx.lineTo(width / 2 + 60, 20); }
        ctx.stroke();

        // IS Curve
        let isOff = graphState.isShift * shift;
        ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 3; ctx.beginPath();
        ctx.moveTo(origin.x + 50 + isOff, origin.y - 250); ctx.lineTo(origin.x + 350 + isOff, origin.y - 50);
        ctx.stroke();
        if (graphState.isShift !== 0) {
            ctx.strokeStyle = "rgba(37, 99, 235, 0.2)"; ctx.setLineDash([5, 5]); ctx.beginPath();
            ctx.moveTo(origin.x + 50, origin.y - 250); ctx.lineTo(origin.x + 350, origin.y - 50); ctx.stroke(); ctx.setLineDash([]);
        }

        // LM Curve
        let lmOff = graphState.lmShift * shift;
        ctx.strokeStyle = "#dc2626"; ctx.lineWidth = 3; ctx.beginPath();
        ctx.moveTo(origin.x + 50 + lmOff, origin.y - 50); ctx.lineTo(origin.x + 350 + lmOff, origin.y - 250);
        ctx.stroke();
        if (graphState.lmShift !== 0) {
            ctx.strokeStyle = "rgba(220, 38, 38, 0.2)"; ctx.setLineDash([5, 5]); ctx.beginPath();
            ctx.moveTo(origin.x + 50, origin.y - 50); ctx.lineTo(origin.x + 350, origin.y - 250); ctx.stroke(); ctx.setLineDash([]);
        }

    }, [graphState]);

    useEffect(() => {
        if (phase === 'phase2Game') {
            drawGraph();
        }
    }, [drawGraph, phase]);

    // --- Loading Screen ---
    if (loading) return <div className="h-screen flex items-center justify-center text-brand-primary font-bold animate-pulse">Carregando MacroGame...</div>;

    // --- Login Screen ---
    if (!user) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-4">
                <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full text-center animate-slide-up relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                    <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6 shadow-inner border border-indigo-100">
                        <span className="text-5xl">🏛️</span>
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">MACRO<span className="text-brand-primary">GAME</span></h1>
                    <p className="text-slate-500 mb-8 font-medium text-sm uppercase tracking-widest">USP Edition</p>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Faça login para acessar o simulador econômico e salvar seu progresso na jornada rumo ao Banco Central.
                    </p>
                    {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-200">{error}</div>}
                    <button onClick={handleLogin} className="w-full bg-white text-slate-700 font-bold py-4 px-6 rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group transform hover:-translate-y-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
                            <path d="M12 4.36c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="group-hover:text-brand-primary transition-colors">Entrar com Google</span>
                    </button>
                </div>
            </div>
        );
    }

    // --- Main App ---
    return (
        <div className="flex flex-col min-h-screen w-full">
            {/* Navbar / Dashboard */}
            <nav className="w-full p-4 flex justify-center z-50 fixed top-0">
                <div className="bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-2 md:py-3 shadow-2xl flex justify-between items-center w-full max-w-6xl border border-white/20 transition-all">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.reload()}>
                        <div className="bg-brand-primary p-2 rounded-lg text-white font-bold text-xl shadow-lg hidden md:block">M</div>
                        <div>
                            <h1 className="text-lg font-extrabold tracking-tight text-brand-primary leading-none">MACRO<span className="text-slate-800">GAME</span></h1>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">USP Edition</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Coin Counter */}
                        <div className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-full shadow-lg">
                            <span className="text-xl">💰</span>
                            <span className="text-lg font-black text-brand-accent">{playerData?.moedas || 0}</span>
                        </div>

                        {/* User Profile */}
                        <div className="flex items-center gap-3 border-l border-slate-200 pl-3 md:pl-6">
                            <div className="text-right hidden md:block">
                                <div className="text-xs font-bold text-slate-700 leading-none mb-1">{playerData?.nome || user.displayName}</div>
                                <div className="text-[10px] text-brand-primary font-bold uppercase tracking-wider">Economista Lv. {playerData?.nivel || 1}</div>
                            </div>
                            <img 
                                src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} 
                                alt="User" 
                                className="w-10 h-10 rounded-full border-2 border-brand-primary shadow-sm bg-slate-200 object-cover" 
                            />
                            <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors ml-2" title="Sair">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow flex flex-col items-center justify-center p-4 pt-28 w-full max-w-6xl mx-auto relative z-10">
                
                {/* Intro Screen */}
                {phase === 'intro' && (
                    <div className="glass-panel w-full max-w-4xl rounded-3xl p-8 md:p-12 text-center animate-slide-up relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-brand-accent"></div>
                        <div className="inline-block p-6 bg-indigo-50 rounded-full mb-8 animate-float shadow-inner border border-indigo-100">
                            <span className="text-6xl">🎓</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Jornada Macroeconômica</h2>
                        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                            Bem-vindo de volta, <strong>{playerData?.nome}</strong>. Continue sua preparação para assumir o Banco Central.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition cursor-default">
                                <div className="text-brand-primary font-black text-4xl mb-2 opacity-20">01</div>
                                <h3 className="font-bold text-lg mb-1 text-brand-primary">Fundamentos</h3>
                                <p className="text-sm text-slate-500">Contabilidade Nacional, Identidades e Sistema Monetário.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 opacity-70">
                                <div className="text-slate-400 font-black text-4xl mb-2 opacity-20">02</div>
                                <h3 className="font-bold text-lg mb-1 text-slate-600">Simulador IS-LM-BP</h3>
                                <p className="text-sm text-slate-400">Modelo Mundell-Fleming e políticas econômicas.</p>
                            </div>
                        </div>
                        <button onClick={startPhase1} className="bg-brand-primary hover:bg-indigo-700 text-white text-xl font-bold py-4 px-12 rounded-xl shadow-xl shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95">
                            INICIAR JORNADA
                        </button>
                    </div>
                )}

                {/* Phase 1: Quiz */}
                {phase === 'phase1' && (
                    <div className="glass-panel w-full max-w-3xl rounded-3xl p-8 animate-slide-up flex flex-col min-h-[500px]">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-2xl font-black text-slate-800">Sabatina Técnica</h3>
                                <p className="text-sm text-slate-500 font-medium">Parte I: Agregados Macroeconômicos</p>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold text-slate-400 uppercase">Questão</div>
                                <div className="text-3xl font-black text-brand-primary">{p1Index + 1}<span className="text-slate-300 text-xl">/{phase1Questions.length}</span></div>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col justify-center">
                            <div className="mb-4 flex items-start justify-between gap-4">
                                <div className="flex-grow">
                                    <span className="inline-block px-3 py-1 bg-indigo-50 text-brand-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">{phase1Questions[p1Index].topic}</span>
                                    <h4 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">{phase1Questions[p1Index].question}</h4>
                                </div>
                                <button onClick={() => setP1HintVisible(true)} className="btn-hint flex-shrink-0 bg-yellow-100 text-yellow-700 p-3 rounded-full hover:bg-yellow-200 transition shadow-md border-2 border-yellow-300 transform hover:scale-110 active:scale-95">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </button>
                            </div>

                            {p1HintVisible && (
                                <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-sm animate-slide-up">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xl">💡</span>
                                        <span className="font-bold uppercase text-xs text-yellow-700">Dica do Manual</span>
                                    </div>
                                    <p className="text-sm text-yellow-900 font-medium leading-relaxed">{phase1Questions[p1Index].hint}</p>
                                </div>
                            )}

                            <div className="space-y-3">
                                {phase1Questions[p1Index].options.map((opt, idx) => (
                                    <button 
                                        key={idx}
                                        disabled={!!p1Feedback}
                                        onClick={() => handleP1Answer(opt, phase1Questions[p1Index])}
                                        className={`w-full text-left p-4 bg-white border-2 rounded-xl font-medium transition shadow-sm group
                                            ${p1Feedback 
                                                ? (opt.correct ? 'border-brand-success bg-emerald-50 text-brand-success' : 'border-slate-100 text-slate-400')
                                                : 'border-slate-100 text-slate-600 hover:border-brand-primary hover:bg-indigo-50 hover:text-brand-primary'
                                            }`}
                                    >
                                        <span className={`inline-block w-6 h-6 rounded-full text-center text-xs leading-6 mr-3 font-bold transition
                                            ${p1Feedback
                                                ? (opt.correct ? 'bg-brand-success text-white' : 'bg-slate-100 text-slate-300')
                                                : 'bg-slate-100 text-slate-400 group-hover:bg-brand-primary group-hover:text-white'
                                            }`}>
                                            {p1Feedback && opt.correct ? '✓' : '?'}
                                        </span>
                                        {opt.text}
                                    </button>
                                ))}
                            </div>

                            {p1Feedback && (
                                <div className={`mt-6 p-5 rounded-xl border-l-4 animate-slide-up shadow-inner ${p1Feedback.isCorrect ? 'bg-emerald-50 border-brand-success' : 'bg-red-50 border-red-500'}`}>
                                    <div className={`text-lg font-black uppercase mb-2 tracking-wide ${p1Feedback.isCorrect ? 'text-brand-success' : 'text-red-500'}`}>
                                        {p1Feedback.isCorrect ? 'CORRETO!' : 'INCORRETO'}
                                    </div>
                                    <p className="font-medium text-slate-700 leading-relaxed">{p1Feedback.text}</p>
                                    <div className="mt-4 flex justify-end">
                                        <button onClick={nextP1Question} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-brand-dark transition shadow-lg transform hover:-translate-y-1">Continuar ➜</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Phase 1 Result */}
                {phase === 'phase1Result' && (
                    <div className="glass-panel w-full max-w-lg rounded-3xl p-10 text-center animate-slide-up">
                        <div className="text-7xl mb-6 animate-bounce">{p1Score >= 7 ? '🎉' : '📚'}</div>
                        <h2 className={`text-3xl font-black mb-2 ${p1Score >= 7 ? 'text-brand-success' : 'text-red-500'}`}>{p1Score >= 7 ? 'Aprovado!' : 'Reprovado'}</h2>
                        <p className="text-slate-500 mb-8 font-medium">{p1Score >= 7 ? 'Você demonstrou domínio dos conceitos básicos.' : 'Você precisa de mais estudo nos Fundamentos.'}</p>
                        
                        <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Aproveitamento</div>
                            <div className="text-5xl font-black text-brand-primary mt-2">{Math.round((p1Score / phase1Questions.length) * 100)}%</div>
                        </div>

                        {p1Score >= 7 ? (
                            <button onClick={startPhase2Setup} className="w-full bg-brand-success hover:bg-emerald-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/30 transition transform hover:-translate-y-1">
                                ASSUMIR O BANCO CENTRAL ➜
                            </button>
                        ) : (
                            <button onClick={startPhase1} className="w-full bg-slate-200 hover:bg-slate-300 text-slate-600 text-lg font-bold py-4 rounded-xl transition">
                                Tentar Novamente ↺
                            </button>
                        )}
                    </div>
                )}

                {/* Phase 2: Setup */}
                {phase === 'phase2Setup' && (
                    <div className="glass-panel w-full max-w-4xl rounded-3xl p-8 md:p-12 animate-slide-up">
                        <div className="text-center mb-10">
                            <span className="bg-brand-primary/10 text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Simulador Avançado</span>
                            <h3 className="text-3xl font-black text-slate-800 mt-3 mb-2">Sala de Guerra Econômica</h3>
                            <p className="text-slate-500">Configure o cenário para testar a eficácia das políticas.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Regime Cambial</label>
                                <select value={p2Setup.regime} onChange={(e) => setP2Setup({...p2Setup, regime: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-brand-primary transition">
                                    <option value="fixo">🛡️ Câmbio Fixo</option>
                                    <option value="flexivel">💸 Câmbio Flexível</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mobilidade de Capitais</label>
                                <select value={p2Setup.mobility} onChange={(e) => setP2Setup({...p2Setup, mobility: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-brand-primary transition">
                                    <option value="perfeita">🌍 Perfeita (Livre Fluxo)</option>
                                    <option value="imperfeita_alta">📈 Imperfeita (Alta)</option>
                                    <option value="imperfeita_baixa">📉 Imperfeita (Baixa)</option>
                                    <option value="nula">🚫 Nula (Sem Mobilidade)</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Instrumento</label>
                                <select value={p2Setup.policy} onChange={(e) => setP2Setup({...p2Setup, policy: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold text-slate-700 outline-none focus:border-brand-primary transition">
                                    <option value="fiscal_exp">🏛️ Fiscal Expansionista (G↑)</option>
                                    <option value="fiscal_contr">🏛️ Fiscal Contracionista (G↓)</option>
                                    <option value="monetaria_exp">💰 Monetária Expansionista (M↑)</option>
                                    <option value="monetaria_contr">💰 Monetária Contracionista (M↓)</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                             <button onClick={runSimulation} className="bg-brand-primary text-white text-xl px-12 py-4 rounded-xl font-bold hover:bg-brand-dark transition shadow-xl shadow-indigo-500/30 transform hover:scale-105 active:scale-95">EXECUTAR POLÍTICA ▶</button>
                        </div>
                    </div>
                )}

                {/* Phase 2: Game */}
                {phase === 'phase2Game' && simulationSteps.length > 0 && (
                    <div className="glass-panel w-full max-w-7xl rounded-3xl p-6 animate-slide-up flex flex-col lg:flex-row gap-6 h-[80vh] min-h-[600px]">
                        <div className="w-full lg:w-4/12 flex flex-col h-full">
                            <div className="bg-white rounded-2xl p-6 h-full flex flex-col border border-slate-100 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
                                <div className="flex justify-between mb-6">
                                    <span className="text-xs font-black text-brand-primary uppercase tracking-widest">Análise em Tempo Real</span>
                                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">Passo {p2Index + 1}/{simulationSteps.length}</span>
                                </div>
                                <h4 className="font-bold text-slate-800 text-xl flex-grow leading-snug mb-4">{simulationSteps[p2Index].question}</h4>
                                
                                <div className="space-y-3 mb-4">
                                    {simulationSteps[p2Index].options.map((opt, idx) => (
                                        <button 
                                            key={idx} 
                                            disabled={!!p2Feedback}
                                            onClick={() => handleP2Answer(opt)}
                                            className={`w-full text-left p-4 bg-white border-2 rounded-xl font-bold text-slate-600 transition shadow-sm ${p2Feedback ? (opt.correct ? 'border-brand-success text-brand-success bg-emerald-50' : 'border-slate-100 text-slate-400') : 'border-slate-100 hover:border-brand-primary hover:text-brand-primary'}`}
                                        >
                                            {opt.text}
                                        </button>
                                    ))}
                                </div>

                                {p2Feedback && (
                                    <div className={`p-4 rounded-xl text-sm border-l-4 animate-slide-up ${p2Feedback.isCorrect ? 'bg-emerald-50 border-brand-success' : 'bg-red-50 border-red-500'}`}>
                                        <p className="font-bold mb-3 text-base">{p2Feedback.text}</p>
                                        <div className="flex gap-2">
                                            <button onClick={playGraphAnimation} className="flex-1 bg-indigo-100 text-indigo-700 py-3 rounded-lg font-bold text-xs hover:bg-indigo-200 transition">👁️ VER GRÁFICO</button>
                                            <button onClick={nextP2Step} className="flex-1 bg-brand-primary text-white py-3 rounded-lg font-bold text-xs hover:bg-brand-dark transition shadow-lg">PRÓXIMO ➜</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full lg:w-8/12 bg-white rounded-2xl shadow-inner border border-slate-200 p-4 relative flex flex-col">
                            <div className="flex justify-between items-center px-2 mb-2">
                                <h3 className="text-xs font-bold text-slate-400 uppercase">Monitor IS-LM-BP</h3>
                                {graphState.animStage === 1 && <div className="text-xs font-bold text-white bg-purple-500 px-2 py-0.5 rounded animate-pulse">LIVE UPDATE</div>}
                            </div>
                            <div className="flex-grow relative rounded-xl bg-slate-50 border border-slate-100 overflow-hidden">
                                <canvas ref={canvasRef} width={800} height={500} className="w-full h-full" />
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-xs font-bold text-slate-500 flex gap-4">
                                    <span className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-1.5"></span>IS</span>
                                    <span className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-1.5"></span>LM</span>
                                    <span className="flex items-center"><span className="w-2 h-2 bg-green-600 rounded-full mr-1.5"></span>BP</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Phase 2 Result */}
                {phase === 'phase2Result' && (
                    <div className="glass-panel w-full max-w-lg rounded-3xl p-10 text-center animate-slide-up">
                        <div className="text-7xl mb-6">📊</div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Análise Concluída</h2>
                        <p className="text-slate-500 mb-8 font-medium">Ciclo de política encerrado.</p>
                        <div className="bg-indigo-50 p-6 rounded-2xl mb-8 border border-indigo-100">
                            <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Moedas Acumuladas</div>
                            <div className="text-5xl font-black text-brand-primary mt-2">{playerData?.moedas}</div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button onClick={startPhase2Setup} className="w-full bg-brand-primary hover:bg-brand-dark text-white py-4 rounded-xl font-bold shadow-lg transition">Nova Simulação</button>
                            <button onClick={() => setPhase('intro')} className="w-full bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 py-4 rounded-xl font-bold transition">Menu Principal</button>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
};

export default App;