export interface CardDataProps {
    id?: number | string;
    iconUrl?: string | undefined | null;
    name?: string | undefined | null;
    description?: string | undefined | null;
}


export interface LoginDataType {
    username: string;
    password: string;
}

export interface RegisterDataType {
    email: string;
    username: string;
    password: string;
}

export interface GetMeDataType {
    email: string,
    username: string,
    password: string
}

export interface Test {
    id: number;
    test_name: string;
    test_mode: string;
    max_questions_per_block: number;
    is_completed: boolean;
    is_suspended: boolean;
    last_question_number: number;
    start_time: string | null;
    user: number;
    questions: number[];
    created_at: string;
}

export interface FlashcardType {
    id: number;
    front: string;
    back: string;
    subject?: string;
    system?: string;
    subcategory?: string;
    front_image?: string;
    back_image?: string;
    difficulty?: string;
    last_reviewed?: string;
    next_review?: string;
}

// types/type.ts
export interface NoteType {
    id: number;
    question_id: number | null;
    case_id: number | null;
    content: string;
    subject: string | null;
    system: string | null;
    subcategory: string | null;
    created_at: string;
    updated_at: string;
    user: number;
};

export interface TestSettings {
    isLearningMode: boolean;
    isTimedMode: boolean;
    testName: string;
    scoringMode: string;
    selectedSubjects: string[];
    selectedSystems: string[];
    maxQuestions: number;
}

export interface UserProgress {
    id: number;
    is_correct: boolean;
    selected_option_id?: number;
    previous_answer_id?: number;
    created_at: string;
    user: number;
    test: number | null;
    question: number;
};