import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Kanbas/Courses/Modules/reducer";
import assignmentsReducer from "../Kanbas/Courses/Assignments/reducer";
import quizReducer from "../Kanbas/Courses/Quizzes/quizReducer";

export const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        quizReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 