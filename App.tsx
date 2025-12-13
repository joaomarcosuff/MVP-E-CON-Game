
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { User, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, googleProvider } from './firebaseClient';
import { PlayerData, Option, Question, SimulationStep, GraphState, GamePhase, Module, Slide } from './types';
import { lessons, generateMundellFlemingLogic, getBpType } from './data';

// --- INTERACTIVE SLIDE COMPONENTS ---

const DerivativeSlider: React.FC = () => {
    const [h, setH] = useState(50); // h begins large
    return (
        <div className="flex flex-col items-center">
            <svg width="300" height="200" className="border-b-2 border-l-2 border-slate-800 bg-white">
                {/* Curve f(x) - approximated by Quadratic Bezier */}
                <path d="M 0 200 Q 150 200 300 0" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Fixed Point (x) */}
                <circle cx="100" cy="155" r="5" fill="#2563eb" />
                <text x="90" y="180" className="text-xs font-bold fill-slate-600">x</text>

                {/* Moving Point (x+h) - Controlled by Slider */}
                <circle cx={100 + h} cy={155 - (h * 0.8)} r="5" fill="#ef4444" />
                <text x={90 + h} y={180} className="text-xs font-bold fill-slate-600">x+h</text>

                {/* Secant/Tangent Line */}
                <line 
                    x1="100" y1="155" 
                    x2={100 + h * 2} y2={155 - (h * 1.6)} 
                    stroke={h < 5 ? "#10b981" : "#ef4444"} 
                    strokeWidth={h < 5 ? 3 : 2}
                    strokeDasharray={h < 5 ? "" : "4"} 
                />
            </svg>
            <div className="mt-4 w-full max-w-xs">
                <label className="text-xs font-bold text-slate-500 uppercase">Aproxime os pontos (h &rarr; 0)</label>
                <input 
                    type="range" min="0" max="100" value={h} 
                    onChange={(e) => setH(Number(e.target.value))} 
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <p className={`text-sm font-bold mt-2 text-center ${h < 5 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    {h < 5 ? "✨ Reta Tangente (Derivada) alcançada!" : "Reta Secante (Velocidade Média)"}
                </p>
            </div>
        </div>
    );
};

const ConcavityToggle: React.FC = () => {
    const [isHappy, setIsHappy] = useState(true);
    return (
        <div className="flex flex-col items-center">
            <svg width="200" height="150" className="bg-white rounded-lg shadow-inner border border-slate-100 mb-4">
                <path 
                    d={isHappy ? "M 20 20 Q 100 150 180 20" : "M 20 130 Q 100 0 180 130"} 
                    fill="none" 
                    stroke={isHappy ? "#10b981" : "#ef4444"} 
                    strokeWidth="4" 
                    strokeLinecap="round"
                />
            </svg>
            <div className="flex gap-4">
                <button onClick={() => setIsHappy(true)} className={`px-4 py-2 rounded-xl font-bold transition-all ${isHappy ? "bg-emerald-100 text-emerald-700 ring-2 ring-emerald-400" : "bg-slate-100 text-slate-400"}`}>
                    😊 f'' &gt; 0
                </button>
                <button onClick={() => setIsHappy(false)} className={`px-4 py-2 rounded-xl font-bold transition-all ${!isHappy ? "bg-red-100 text-red-700 ring-2 ring-red-400" : "bg-slate-100 text-slate-400"}`}>
                    ☹️ f'' &lt; 0
                </button>
            </div>
            <p className="mt-2 text-sm font-bold text-slate-600">{isHappy ? "Convexa (Mínimo)" : "Côncava (Máximo)"}</p>
        </div>
    );
};

const LagrangeVisualizer: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[300px] h-[200px] border border-slate-200 bg-white rounded-lg shadow-sm overflow-hidden">
                <svg width="100%" height="100%">
                    {/* Isoquants */}
                    <path d="M 10 190 Q 50 50 190 10" fill="none" stroke="#cbd5e1" strokeWidth="2" />
                    <path d="M 40 190 Q 80 80 190 40" fill="none" stroke="#94a3b8" strokeWidth="2" />
                    
                    {/* Budget Line */}
                    <line x1="0" y1="150" x2="150" y2="0" stroke="#ef4444" strokeWidth="3" />
                    
                    {/* Tangency Point */}
                    <circle cx="75" cy="75" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />
                </svg>
                <div className="absolute top-[60px] left-[90px] bg-white/90 px-2 py-1 rounded shadow text-[10px] font-bold text-slate-600">
                    Ponto Ótimo
                </div>
            </div>
            <p className="mt-3 text-sm text-slate-500 text-center max-w-xs">
                O ponto ótimo é o único onde você toca a curva mais alta possível sem estourar o orçamento (linha vermelha).
            </p>
        </div>
    );
};

const SpeedometerAnalogy: React.FC = () => {
    const [mode, setMode] = useState<'avg' | 'inst'>('avg');
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-48 h-24 bg-slate-100 rounded-t-full border-4 border-slate-300 overflow-hidden flex justify-center items-end pb-2">
                <div className="absolute bottom-0 w-2 h-20 bg-slate-800 origin-bottom transition-transform duration-500 ease-out" style={{transform: `rotate(${mode === 'avg' ? '-45deg' : '45deg'})`}}></div>
                <span className={`text-2xl font-black z-10 ${mode === 'avg' ? 'text-slate-500' : 'text-red-500'}`}>{mode === 'avg' ? '50' : '110'}</span>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setMode('avg')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${mode==='avg'?'bg-brand-primary text-white shadow-lg scale-105':'bg-slate-200 text-slate-400'}`}>Média (2h)</button>
                <button onClick={() => setMode('inst')} className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${mode==='inst'?'bg-red-500 text-white shadow-lg scale-105':'bg-slate-200 text-slate-400'}`}>Instantânea</button>
            </div>
            <p className="text-sm text-center font-medium text-slate-600 max-w-xs">
                {mode === 'avg' ? "Média em um longo intervalo de tempo." : "A velocidade exata no momento do radar (h -> 0)!"}
            </p>
        </div>
    )
};

const InteractiveContent: React.FC<{ type: string }> = ({ type }) => {
    if (type === "derivative_slider") return <DerivativeSlider />;
    if (type === "concavity_toggle") return <ConcavityToggle />;
    if (type === "lagrange_visualizer") return <LagrangeVisualizer />;
    if (type === "speedometer_analogy") return <SpeedometerAnalogy />;
    return null;
};

const SlideRenderer: React.FC<{ slide: Slide, onNext: () => void, isLast: boolean }> = ({ slide, onNext, isLast }) => {
    return (
        <div className="flex flex-col h-full animate-fade-in">
            <h3 className="text-2xl font-black text-slate-800 mb-6">{slide.title}</h3>
            
            <div className="prose prose-slate prose-lg mb-8 text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.html }} />
            
            <div className="flex-grow flex items-center justify-center bg-slate-50 rounded-2xl border-2 border-slate-100 p-6 mb-8 shadow-inner">
                 {slide.interactiveType ? (
                     <InteractiveContent type={slide.interactiveType} />
                 ) : (
                     <div className="text-slate-300 font-bold">Conteúdo Visual</div>
                 )}
            </div>

            <button onClick={onNext} className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {isLast ? "Começar Desafio ⚡" : "Próximo Slide ➜"}
            </button>
        </div>
    );
}

// --- MAIN APP ---

const App: React.FC = () => {
    // --- State Management ---
    const [user, setUser] = useState<User | null>(null);
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [phase, setPhase] = useState<GamePhase>('intro');
    const [error, setError] = useState<string | null>(null);

    // Navigation State
    const [activeTrackKey, setActiveTrackKey] = useState<string | null>(null);
    const [activeModule, setActiveModule] = useState<Module | null>(null);

    // Lesson (Slides) State
    const [viewingSlides, setViewingSlides] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    // Quiz State (Lesson)
    const [qIndex, setQIndex] = useState(0);
    const [qScore, setQScore] = useState(0);
    const [qFeedback, setQFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
    const [qHintVisible, setQHintVisible] = useState(false);
    
    // Interactive Inputs State
    const [textInput, setTextInput] = useState('');
    const [sliderValue, setSliderValue] = useState(0);

    // Simulation State
    const [simSetup, setSimSetup] = useState({ regime: 'fixo', mobility: 'perfeita', policy: 'fiscal_exp' });
    const [simulationSteps, setSimulationSteps] = useState<SimulationStep[]>([]);
    const [simIndex, setSimIndex] = useState(0);
    const [graphState, setGraphState] = useState<GraphState>({ isShift: 0, lmShift: 0, bpType: 'horizontal', animStage: 0 });
    const [simFeedback, setSimFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);
    const [simHintVisible, setSimHintVisible] = useState(false);
    
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

    // --- Navigation Handlers ---
    const enterTrack = (key: string) => {
        setActiveTrackKey(key);
        setPhase('track');
    };

    const enterModule = (mod: Module) => {
        if (mod.status === 'locked') return;
        setActiveModule(mod);
        
        if (mod.type === 'simulation') {
            setPhase('simSetup');
        } else {
            // Check for Slides
            if (mod.slides && mod.slides.length > 0) {
                setViewingSlides(true);
                setSlideIndex(0);
            } else {
                setViewingSlides(false);
            }
            
            // Quiz Setup
            setQIndex(0);
            setQScore(0);
            setQFeedback(null);
            setQHintVisible(false);
            setTextInput('');
            setSliderValue(0);
            setPhase('lesson');
        }
    };

    // --- GENERIC ANSWER HANDLER ---
    const handleAnswerSubmit = (isCorrect: boolean, explanation: string) => {
        if (qFeedback) return;

        if (isCorrect) {
            setQScore(prev => prev + 1);
            updateCoins(50);
            setQFeedback({ isCorrect: true, text: explanation });
        } else {
            setQFeedback({ isCorrect: false, text: `Explicação: ${explanation}` });
        }
    };

    // MC Handler
    const handleMCAnswer = (option: Option, question: Question) => {
        handleAnswerSubmit(option.correct, question.explanation);
    };

    // Fill Gap Handler
    const handleFillGapSubmit = (question: Question) => {
        const correct = textInput.toLowerCase().trim() === (question.correctAnswer?.toLowerCase().trim() || "");
        handleAnswerSubmit(correct, question.explanation);
    };

    // Graph Shift Handler
    const handleGraphShiftSubmit = (question: Question) => {
        // Assume right > 20, left < -20 on a -50 to 50 scale
        let correct = false;
        if (question.correctDirection === 'right') correct = sliderValue > 20;
        else if (question.correctDirection === 'left') correct = sliderValue < -20;
        
        handleAnswerSubmit(correct, question.explanation);
    };

    // Graph Point Handler
    const handleGraphPointClick = (e: React.MouseEvent<SVGSVGElement>, question: Question) => {
        if (qFeedback || !question.target) return;
        
        const svg = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - svg.left;
        const y = e.clientY - svg.top;
        
        const dist = Math.sqrt(Math.pow(x - question.target.x, 2) + Math.pow(y - question.target.y, 2));
        const correct = dist <= question.target.tolerance;

        handleAnswerSubmit(correct, correct ? question.explanation : "Tente novamente! Procure o ponto indicado.");
    };

    const nextQuizQuestion = () => {
        if (activeModule && qIndex < activeModule.questions.length - 1) {
            setQIndex(prev => prev + 1);
            setQFeedback(null);
            setQHintVisible(false);
            setTextInput('');
            setSliderValue(0);
        } else {
            setPhase('result');
        }
    };

    const nextSlide = () => {
        if (activeModule && activeModule.slides && slideIndex < activeModule.slides.length - 1) {
            setSlideIndex(prev => prev + 1);
        } else {
            setViewingSlides(false); // End slides, start quiz
        }
    };

    // --- Simulation Logic ---
    const runSimulation = () => {
        const steps = generateMundellFlemingLogic(simSetup.regime, simSetup.mobility, simSetup.policy);
        setSimulationSteps(steps);
        setGraphState({ 
            isShift: 0, 
            lmShift: 0, 
            bpType: getBpType(simSetup.mobility), 
            animStage: 0 
        });
        setSimIndex(0);
        setSimFeedback(null);
        setSimHintVisible(false);
        setPhase('simGame');
    };

    const handleSimAnswer = (option: Option) => {
        if (simFeedback) return;
        const currentStep = simulationSteps[simIndex];
        
        if (option.correct) {
            updateCoins(50);
            setSimFeedback({ isCorrect: true, text: "Correto!" });
            if (currentStep.targetState) {
                setGraphState(prev => ({
                    ...prev,
                    targetIS: currentStep.targetState!.isShift,
                    targetLM: currentStep.targetState!.lmShift
                }));
            }
        } else {
            setSimFeedback({ isCorrect: false, text: "Resposta incorreta." });
             if (currentStep.targetState) {
                setGraphState(prev => ({
                    ...prev,
                    targetIS: currentStep.targetState!.isShift,
                    targetLM: currentStep.targetState!.lmShift
                }));
            }
        }
    };

    const nextSimStep = () => {
        setGraphState(prev => ({
            ...prev,
            isShift: prev.targetIS !== undefined ? prev.targetIS : prev.isShift,
            lmShift: prev.targetLM !== undefined ? prev.targetLM : prev.lmShift,
            targetIS: undefined,
            targetLM: undefined
        }));

        if (simIndex < simulationSteps.length - 1) {
            setSimIndex(prev => prev + 1);
            setSimFeedback(null);
            setSimHintVisible(false);
        } else {
            setPhase('simResult');
        }
    };

    const playGraphAnimation = () => {
        if (!simulationSteps[simIndex].targetState) return;
        setGraphState(prev => ({ ...prev, animStage: 0 }));
        setTimeout(() => {
            setGraphState(prev => ({ 
                ...prev, 
                isShift: prev.targetIS!, 
                lmShift: prev.targetLM!,
                animStage: 1 
            }));
        }, 800);
        setTimeout(() => {
            setGraphState(prev => ({ ...prev, animStage: 0 }));
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
        if (phase === 'simGame') {
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
                    <button onClick={handleLogin} className="w-full bg-white text-slate-700 font-bold py-4 px-6 rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 transition-all">
                        Entrar com Google
                    </button>
                </div>
            </div>
        );
    }

    // --- Helper to Render Question Content ---
    const renderQuestionContent = (q: Question) => {
        // 1. Multiple Choice (Default)
        if (!q.type || q.type === 'multiple_choice') {
            return (
                <div className="space-y-3 mt-6 animate-fade-in">
                    {q.options?.map((opt, i) => (
                        <button key={i} onClick={() => handleMCAnswer(opt, q)} disabled={!!qFeedback} className={`w-full p-4 rounded-xl border-2 text-left font-bold transition-all ${qFeedback ? (opt.correct ? 'bg-emerald-100 border-emerald-500 text-emerald-800' : 'bg-white border-slate-100 text-slate-400') : 'bg-white border-slate-100 hover:border-brand-primary text-slate-600'}`}>
                            {opt.text}
                        </button>
                    ))}
                </div>
            );
        }

        // 2. Fill Gap
        if (q.type === 'fill_gap' && q.gapText) {
            const parts = q.gapText.split('{{gap}}');
            return (
                <div className="mt-8 flex flex-col items-center animate-fade-in">
                    <div className="text-xl font-medium leading-loose text-center mb-6">
                        {parts[0]}
                        <input 
                            type="text" 
                            disabled={!!qFeedback}
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            className={`mx-2 border-b-2 bg-indigo-50 text-center font-bold outline-none px-2 py-1 w-32 ${qFeedback ? (textInput.toLowerCase() === q.correctAnswer?.toLowerCase() ? 'border-emerald-500 text-emerald-600' : 'border-red-500 text-red-500') : 'border-slate-300 text-brand-primary'}`}
                        />
                        {parts[1]}
                    </div>
                    <button onClick={() => handleFillGapSubmit(q)} disabled={!!qFeedback || !textInput} className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark disabled:opacity-50">
                        Verificar
                    </button>
                </div>
            );
        }

        // 3. Graph Point (Click on SVG)
        if (q.type === 'graph_point' && q.svgPath) {
            return (
                <div className="mt-6 flex flex-col items-center animate-fade-in">
                    <div className="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-white cursor-crosshair shadow-sm hover:shadow-md transition-shadow">
                        <svg width="300" height="300" onClick={(e) => handleGraphPointClick(e, q)}>
                            {/* Grid/Axes */}
                            <defs>
                                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            <line x1="20" y1="280" x2="280" y2="280" stroke="#64748b" strokeWidth="2" /> {/* X Axis */}
                            <line x1="20" y1="20" x2="20" y2="280" stroke="#64748b" strokeWidth="2" />  {/* Y Axis */}
                            
                            {/* The Function Curve */}
                            <path d={q.svgPath} fill="none" stroke="#2563eb" strokeWidth="4" />
                            
                            {/* Feedback Marker */}
                            {qFeedback && q.target && (
                                <circle cx={q.target.x} cy={q.target.y} r="8" fill={qFeedback.isCorrect ? "#10b981" : "#ef4444"} stroke="white" strokeWidth="2" />
                            )}
                        </svg>
                        <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded text-xs text-slate-500">Clique no gráfico</div>
                    </div>
                </div>
            );
        }

        // 4. Graph Shift (Slider)
        if (q.type === 'graph_shift') {
            return (
                <div className="mt-6 flex flex-col items-center w-full max-w-sm mx-auto animate-fade-in">
                    <svg width="300" height="300" className="border-2 border-slate-200 rounded-xl bg-white mb-6">
                         <line x1="20" y1="280" x2="280" y2="280" stroke="#64748b" strokeWidth="2" /> 
                         <line x1="20" y1="20" x2="20" y2="280" stroke="#64748b" strokeWidth="2" />
                         
                         {/* Static Curve (Reference) */}
                         {q.curveType === 'supply' ? (
                            <line x1="50" y1="250" x2="250" y2="50" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="5,5" />
                         ) : (
                            <line x1="50" y1="50" x2="250" y2="250" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="5,5" />
                         )}

                         {/* Dynamic Curve */}
                         {q.curveType === 'supply' ? (
                            <line x1={50 + sliderValue} y1="250" x2={250 + sliderValue} y2="50" stroke="#2563eb" strokeWidth="4" />
                         ) : (
                            <line x1={50 + sliderValue} y1="50" x2={250 + sliderValue} y2="250" stroke="#dc2626" strokeWidth="4" />
                         )}
                    </svg>
                    
                    <div className="w-full px-4">
                        <input 
                            type="range" min="-50" max="50" 
                            value={sliderValue} 
                            disabled={!!qFeedback}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
                        />
                        <div className="flex justify-between text-xs font-bold text-slate-400 mt-2 uppercase">
                            <span>Esquerda (Contração)</span>
                            <span>Direita (Expansão)</span>
                        </div>
                    </div>
                    
                    <button onClick={() => handleGraphShiftSubmit(q)} disabled={!!qFeedback} className="mt-6 bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark">
                        Confirmar Movimento
                    </button>
                </div>
            );
        }

        return <div className="text-red-500">Tipo de questão desconhecido.</div>;
    };


    // --- Main App ---
    return (
        <div className="flex flex-col min-h-screen w-full">
            {/* Navbar */}
            <nav className="w-full p-4 flex justify-center z-50 fixed top-0">
                <div className="bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-2 md:py-3 shadow-2xl flex justify-between items-center w-full max-w-6xl border border-white/20 transition-all">
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPhase('dashboard')}>
                        <div className="bg-brand-primary p-2 rounded-lg text-white font-bold text-xl shadow-lg hidden md:block">M</div>
                        <div>
                            <h1 className="text-lg font-extrabold tracking-tight text-brand-primary leading-none">ECONO<span className="text-slate-800">QUEST</span></h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2 rounded-full shadow-lg">
                            <span className="text-xl">💰</span>
                            <span className="text-lg font-black text-brand-accent">{playerData?.moedas || 0}</span>
                        </div>
                        
                        {user.photoURL && (
                            <img 
                                src={user.photoURL} 
                                alt={user.displayName || "Perfil"} 
                                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                                title={user.displayName || "Perfil"}
                            />
                        )}

                        <button onClick={handleLogout} className="text-slate-400 hover:text-red-500 transition-colors ml-2" title="Sair">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="flex-grow flex flex-col items-center p-4 pt-28 w-full max-w-6xl mx-auto relative z-10">
                
                {/* Intro / Dashboard */}
                {(phase === 'intro' || phase === 'dashboard') && (
                    <div className="animate-slide-up w-full">
                        <h2 className="text-3xl font-black text-white mb-6">Trilhas de Conhecimento</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(lessons).map(([key, track]) => (
                                <div key={key} onClick={() => enterTrack(key)} className="bg-white p-6 rounded-3xl cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-4xl bg-indigo-50 p-3 rounded-2xl">{track.icon}</div>
                                        <span className="bg-slate-100 text-xs font-bold px-2 py-1 rounded text-slate-500">{track.id}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">{track.title}</h3>
                                    <p className="text-sm text-brand-primary font-bold uppercase tracking-wide mb-2">{track.subtitle}</p>
                                    <p className="text-slate-500 text-sm">{track.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Track View */}
                {phase === 'track' && activeTrackKey && lessons[activeTrackKey] && (
                    <div className="animate-slide-up w-full max-w-4xl">
                        <button onClick={() => setPhase('dashboard')} className="text-white mb-4 font-bold text-sm">← Voltar</button>
                        <div className="glass-panel p-8 rounded-3xl mb-6">
                            <h2 className="text-3xl font-black text-slate-800">{lessons[activeTrackKey].title}</h2>
                            <p className="text-slate-500">{lessons[activeTrackKey].description}</p>
                        </div>
                        <div className="space-y-4">
                            {lessons[activeTrackKey].modules.map(mod => (
                                <div key={mod.id} onClick={() => enterModule(mod)} className={`p-5 rounded-2xl flex items-center justify-between border-2 cursor-pointer transition-all ${mod.status === 'locked' ? 'bg-slate-800/50 border-transparent opacity-60' : 'bg-white border-white hover:border-brand-primary'}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${mod.status === 'locked' ? 'bg-slate-600 text-slate-400' : 'bg-indigo-100 text-brand-primary'}`}>
                                            {mod.status === 'locked' ? '🔒' : (mod.type === 'simulation' ? '⚡' : '▶')}
                                        </div>
                                        <div>
                                            <h4 className={`font-bold ${mod.status === 'locked' ? 'text-slate-400' : 'text-slate-800'}`}>{mod.title}</h4>
                                            <span className="text-xs font-bold uppercase opacity-50 text-slate-500">{mod.id}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Lesson (Slides & Quiz) View */}
                {phase === 'lesson' && activeModule && (
                    <div className="glass-panel p-8 rounded-3xl animate-slide-up w-full max-w-3xl min-h-[500px] flex flex-col">
                        <div className="flex justify-between mb-6">
                            <button onClick={() => setPhase('track')} className="text-slate-400 hover:text-brand-primary">✕ Sair</button>
                            <span className="font-bold text-brand-primary">
                                {viewingSlides ? `Aula ${slideIndex + 1}/${activeModule.slides?.length || 0}` : `Desafio ${qIndex + 1}/${activeModule.questions.length}`}
                            </span>
                        </div>
                        
                        {/* Render Slides or Quiz */}
                        {viewingSlides && activeModule.slides ? (
                            <SlideRenderer 
                                slide={activeModule.slides[slideIndex]} 
                                onNext={nextSlide}
                                isLast={slideIndex === (activeModule.slides.length - 1)}
                            />
                        ) : (
                            activeModule.questions.length > 0 ? (
                                <div className="flex-grow animate-fade-in">
                                    <span className="bg-indigo-50 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase">{activeModule.questions[qIndex].topic}</span>
                                    <h3 className="text-2xl font-bold text-slate-800 mt-4 mb-2">{activeModule.questions[qIndex].question}</h3>
                                    
                                    {/* DYNAMIC CONTENT RENDERER */}
                                    {renderQuestionContent(activeModule.questions[qIndex])}

                                    {qFeedback && (
                                        <div className={`mt-6 p-4 rounded-xl border-l-4 animate-slide-up ${qFeedback.isCorrect ? 'bg-emerald-50 border-emerald-500' : 'bg-red-50 border-red-500'}`}>
                                            <p className="font-bold text-slate-800">{qFeedback.text}</p>
                                            <button onClick={nextQuizQuestion} className="mt-4 bg-brand-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-dark">Próxima</button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-20 text-slate-400">Conteúdo em Breve</div>
                            )
                        )}
                    </div>
                )}

                {/* Result View */}
                {phase === 'result' && (
                    <div className="glass-panel w-full max-w-lg rounded-3xl p-10 text-center animate-slide-up">
                        <div className="text-7xl mb-6">🎉</div>
                        <h2 className="text-3xl font-black mb-2 text-brand-success">Módulo Concluído!</h2>
                        <button onClick={() => setPhase('track')} className="mt-8 bg-brand-primary text-white py-3 px-8 rounded-xl font-bold hover:bg-brand-dark">Voltar para Trilha</button>
                    </div>
                )}

                {/* Simulation Setup */}
                {phase === 'simSetup' && (
                    <div className="glass-panel w-full max-w-4xl rounded-3xl p-8 animate-slide-up">
                        <h2 className="text-3xl font-black text-slate-800 mb-6 text-center">Configuração do Simulador</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                             <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Regime</label>
                                <select value={simSetup.regime} onChange={(e) => setSimSetup({...simSetup, regime: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold">
                                    <option value="fixo">🛡️ Fixo</option>
                                    <option value="flexivel">💸 Flexível</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Mobilidade</label>
                                <select value={simSetup.mobility} onChange={(e) => setSimSetup({...simSetup, mobility: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold">
                                    <option value="perfeita">🌍 Perfeita</option>
                                    <option value="imperfeita_alta">📈 Alta</option>
                                </select>
                            </div>
                             <div className="space-y-3">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Política</label>
                                <select value={simSetup.policy} onChange={(e) => setSimSetup({...simSetup, policy: e.target.value})} className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold">
                                    <option value="fiscal_exp">🏛️ Fiscal Exp.</option>
                                    <option value="monetaria_exp">💰 Monetária Exp.</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={runSimulation} className="bg-brand-primary text-white text-xl px-12 py-4 rounded-xl font-bold hover:bg-brand-dark transition transform hover:scale-105">INICIAR ▶</button>
                        </div>
                    </div>
                )}

                {/* Simulation Game */}
                {phase === 'simGame' && simulationSteps.length > 0 && (
                     <div className="glass-panel w-full max-w-7xl rounded-3xl p-6 animate-slide-up flex flex-col lg:flex-row gap-6 h-[80vh] min-h-[600px]">
                        <div className="w-full lg:w-4/12 flex flex-col h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
                             <h4 className="font-bold text-slate-800 text-xl mb-4">{simulationSteps[simIndex].question}</h4>
                             <div className="space-y-3 mb-4">
                                {simulationSteps[simIndex].options.map((opt, idx) => (
                                    <button key={idx} disabled={!!simFeedback} onClick={() => handleSimAnswer(opt)} className={`w-full text-left p-4 bg-white border-2 rounded-xl font-bold text-slate-600 transition shadow-sm ${simFeedback ? (opt.correct ? 'border-brand-success text-brand-success bg-emerald-50' : 'border-slate-100 text-slate-400') : 'border-slate-100 hover:border-brand-primary hover:text-brand-primary'}`}>
                                        {opt.text}
                                    </button>
                                ))}
                             </div>
                             {simFeedback && (
                                <div className={`p-4 rounded-xl text-sm border-l-4 animate-slide-up ${simFeedback.isCorrect ? 'bg-emerald-50 border-brand-success' : 'bg-red-50 border-red-500'}`}>
                                    <p className="font-bold mb-3 text-base">{simFeedback.text}</p>
                                    <div className="flex gap-2">
                                        <button onClick={playGraphAnimation} className="flex-1 bg-indigo-100 text-indigo-700 py-3 rounded-lg font-bold text-xs hover:bg-indigo-200 transition">👁️ GRÁFICO</button>
                                        <button onClick={nextSimStep} className="flex-1 bg-brand-primary text-white py-3 rounded-lg font-bold text-xs hover:bg-brand-dark transition shadow-lg">PRÓXIMO ➜</button>
                                    </div>
                                </div>
                             )}
                        </div>
                        <div className="w-full lg:w-8/12 bg-white rounded-2xl shadow-inner border border-slate-200 p-4 relative flex flex-col">
                            <canvas ref={canvasRef} width={800} height={500} className="w-full h-full" />
                        </div>
                     </div>
                )}
                
                {/* Sim Result */}
                {phase === 'simResult' && (
                    <div className="glass-panel w-full max-w-lg rounded-3xl p-10 text-center animate-slide-up">
                        <div className="text-7xl mb-6">📊</div>
                        <h2 className="text-3xl font-black text-slate-800 mb-2">Simulação Concluída</h2>
                        <button onClick={() => setPhase('track')} className="mt-8 w-full bg-brand-primary text-white py-4 rounded-xl font-bold">Voltar</button>
                    </div>
                )}

            </main>
        </div>
    );
};

export default App;
