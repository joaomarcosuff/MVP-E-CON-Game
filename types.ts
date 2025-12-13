
export interface Question {
    id: string;
    type: 'multiple_choice' | 'input';
    prompt: string;
    options?: string[]; // For multiple choice
    answer: string; // The correct answer string
    hint?: string;
    feedback?: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    xp: number;
    questions: Question[];
}

export interface Module {
    id: string;
    title: string;
    lessons: Lesson[];
}

export interface Track {
    id: string;
    title: string;
    icon: string;
    description: string;
    modules: Module[];
}

export interface GameData {
    tracks: Track[];
}

export interface PlayerProgress {
    xp: number;
    level: number;
    streak: number;
    completedLessons: string[]; // Array of Lesson IDs
    hearts: number;
    lastLoginDate: string;
}

export interface ProgressionRules {
    xp_system: {
        base_xp_per_question: number;
        streak_multiplier: number;
        lesson_completion_bonus: number;
        perfect_lesson_bonus: number;
    };
    unlock_logic: {
        require_previous_lesson: boolean;
        min_accuracy_to_unlock: number;
    };
    failure_handling: {
        max_hearts: number;
        hearts_regen_time_minutes: number;
    };
    mastery: {
        threshold_gold: number;
        threshold_silver: number;
        threshold_bronze: number;
    };
}

// Types for data.ts
export interface SimulationOption {
    text: string;
    correct: boolean;
}

export interface SimulationState {
    isShift: number;
    lmShift: number;
}

export interface SimulationStep {
    question: string;
    hint: string;
    options: SimulationOption[];
    targetState: SimulationState;
}

export interface DataSlide {
    title: string;
    html: string;
    interactiveType?: string;
}

export interface DataQuestion {
    topic: string;
    question: string;
    hint?: string;
    type: string;
    options?: { text: string; correct: boolean }[];
    explanation?: string;
    gapText?: string;
    correctAnswer?: string;
    svgPath?: string;
    target?: { x: number; y: number; tolerance: number };
    curveType?: string;
    correctDirection?: string;
}

export interface DataModule {
    id: string;
    title: string;
    description?: string;
    status: string;
    type: string;
    xpReward?: number;
    nextModule?: string;
    slides?: DataSlide[];
    questions: DataQuestion[];
}

export interface DataTrack {
    id: string;
    title: string;
    subtitle?: string;
    icon: string;
    description: string;
    modules: DataModule[];
}

export type Lessons = Record<string, DataTrack>;