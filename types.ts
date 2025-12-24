
// types.ts

export interface LessonCard {
    type?: "story" | "concept" | "visual" | "formal" | "example" | "economic_intuition";
    title: string;
    html?: string;
    latex?: string;
    interactiveType?: string;
}

export interface Question {
    id?: string;
    type: 'multiple_choice' | 'input' | 'numeric' | 'fill_gap' | 'graph_point' | 'graph_shift' | 'text';
    prompt?: string;
    latex?: string;
    text?: string;
    options?: any[];
    answer?: string;
    hint?: string;
    feedback?: string;
    explanation?: string;
    svgPath?: string;
    target?: { x: number; y: number; tolerance: number };
    curveType?: string;
    correctDirection?: string;
    instruction?: string;
    topic?: string;
    question?: string;
    correctAnswer?: string;
    gapText?: string;
}

export interface Lesson {
    id: string;
    category?: string;
    title: string;
    description: string;
    xp: number;
    cards: LessonCard[];
    masteryCards?: Record<number, LessonCard[]>; // Cards específicos para níveis 0, 1 e 2
    questions: Question[];
    nextModule?: string | null;
}

export interface Module {
    id: string;
    title: string;
    description?: string;
    lessons?: Lesson[];
    status?: string;
    type?: string;
    xpReward?: number;
    nextModule?: string;
    slides?: any[];
    questions?: Question[];
}

export interface Track {
    id: string;
    title: string;
    icon: string;
    description: string;
    modules: Module[];
    subtitle?: string;
}

export interface PlayerProgress {
    xp: number;
    level: number;
    streak: number;
    completedLessons: string[];
    lessonMastery: Record<string, number>;
    hearts: number;
    lastLoginDate: string;
    displayName?: string;
    photoURL?: string;
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

export interface SimulationStep {
    question: string;
    hint: string;
    options: { text: string; correct: boolean }[];
    targetState?: {
        isShift: number;
        lmShift: number;
    };
}

export interface Lessons {
    [key: string]: Track;
}

export interface GameData {
    tracks: Track[];
}
