export interface PlayerData {
    nome: string;
    moedas: number;
    nivel: number;
    xp: number;
}

export interface Question {
    topic: string;
    question: string;
    hint: string;
    options: Option[];
    explanation: string;
}

export interface Option {
    text: string;
    correct: boolean;
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
    status: 'locked' | 'unlocked' | 'completed';
    type?: 'quiz' | 'simulation';
    questions: Question[];
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