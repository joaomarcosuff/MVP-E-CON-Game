

export interface Question {
    id: string;
    type: 'multiple_choice' | 'input' | 'numeric' | 'fill_gap' | 'graph_point' | 'graph_shift' | 'text';
    prompt?: string; // Used for text/numeric
    latex?: string; // Specific for math rendering
    text?: string; // For fill_gap context
    options?: string[]; // For multiple choice
    answer: string; // The correct answer string
    hint?: string;
    feedback?: string; // Or explanation
    explanation?: string;
    
    // Graphical properties
    svgPath?: string;
    target?: { x: number; y: number; tolerance: number };
    curveType?: string;
    correctDirection?: string;
    instruction?: string;
}

export interface Lesson {
    id: string;
    category?: string;
    title: string;
    description: string;
    xp: number;
    questions: Question[];
    nextModule?: string | null;
}

export interface Module {
    id: string;
    title: string;
    description?: string;
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

// Types for legacy data compatibility
export interface SimulationStep {
    question: string;
    hint: string;
    options: { text: string; correct: boolean }[];
    targetState?: { isShift: number; lmShift: number };
}

export interface Lessons {
    [key: string]: {
        id: string;
        title: string;
        subtitle?: string;
        icon: string;
        description: string;
        modules: any[];
    };
}
