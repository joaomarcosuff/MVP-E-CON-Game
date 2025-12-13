
export interface PlayerData {
    nome: string;
    moedas: number;
    nivel: number;
    xp: number;
}

export type QuestionType = 'multiple_choice' | 'fill_gap' | 'graph_point' | 'graph_shift';

export interface Question {
    topic: string;
    question: string; // Instrução principal
    hint: string;
    explanation: string;
    type?: QuestionType; // Opcional, default é multiple_choice
    
    // Múltipla Escolha
    options?: Option[];

    // Fill Gap
    gapText?: string; // Texto com {{gap}}
    correctAnswer?: string; // Resposta correta (string)

    // Graph Point
    svgPath?: string;
    target?: { x: number; y: number; tolerance: number };

    // Graph Shift
    curveType?: 'supply' | 'demand';
    correctDirection?: 'left' | 'right';
}

export interface Option {
    text: string;
    correct: boolean;
}

export interface Slide {
    title: string;
    html: string;
    interactiveType?: string;
}

export interface SimulationStep {
    question: string;
    hint: string;
    options: Option[];
    targetState?: {
        isShift: number;
        lmShift: number;
    };
}

export interface Module {
    id: string;
    title: string;
    description?: string;
    status: 'locked' | 'unlocked' | 'completed';
    type?: 'quiz' | 'simulation';
    slides?: Slide[];
    questions: Question[];
    xpReward?: number;
    nextModule?: string;
}

export interface Track {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
    modules: Module[];
}

export interface Lessons {
    [key: string]: Track;
}

export type GamePhase = 'intro' | 'dashboard' | 'track' | 'lesson' | 'result' | 'simSetup' | 'simGame' | 'simResult';

export interface GraphState {
    isShift: number;
    lmShift: number;
    bpType: 'horizontal' | 'vertical' | 'flat' | 'steep';
    animStage: number;
    targetIS?: number;
    targetLM?: number;
}
