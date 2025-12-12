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

export type GamePhase = 'intro' | 'phase1' | 'phase1Result' | 'phase2Setup' | 'phase2Game' | 'phase2Result';

export interface GraphState {
    isShift: number;
    lmShift: number;
    bpType: 'horizontal' | 'vertical' | 'flat' | 'steep';
    animStage: number;
    targetIS?: number;
    targetLM?: number;
}