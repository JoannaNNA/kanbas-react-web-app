import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 定义 Quiz 接口
interface Quiz {
    _id: string;
    title: string;
    course: string;
    quizType?: string;
    points?: number;
    assignmentGroup?: string;
    shuffleAnswers?: boolean;
    timeLimit?: number;
    multipleAttempts?: boolean;
    attemptsAllowed?: number;
    showCorrectAnswers?: boolean;
    accessCode?: string;
    oneQuestionAtTime?: boolean;
    webcamRequired?: boolean;
    lockQuestionsAfterAnswering?: boolean;
    dueDate?: Date;
    availableFrom?: Date;
    availableUntil?: Date;
    editing?: boolean;
}

// 定义 State 接口
interface QuizState {
    quizzes: Quiz[];
    loading: boolean;
    error: string | null;
}

const initialState: QuizState = {
    quizzes: [],
    loading: false,
    error: null
};

const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, action: PayloadAction<Quiz>) => {
            state.quizzes.push(action.payload);
        },
        updateQuiz: (state, action: PayloadAction<Quiz>) => {
            const index = state.quizzes.findIndex(quiz => quiz._id === action.payload._id);
            if (index !== -1) {
                state.quizzes[index] = action.payload;
            }
        },
        deleteQuiz: (state, action: PayloadAction<string>) => {
            state.quizzes = state.quizzes.filter(quiz => quiz._id !== action.payload);
        },
        editQuiz: (state, action: PayloadAction<string>) => {
            const quiz = state.quizzes.find(q => q._id === action.payload);
            if (quiz) {
                quiz.editing = true;
            }
        }
    }
});

// 导出 actions
export const { setQuizzes, addQuiz, updateQuiz, deleteQuiz, editQuiz } = quizSlice.actions;

// 导出 reducer
export default quizSlice.reducer;

// 导出类型
export type { Quiz, QuizState };