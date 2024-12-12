import { createSlice } from "@reduxjs/toolkit";
import { quizzes as assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {


        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
        },
        addModule: (state, { payload: assignment }) => {
            const newModule: any = {
              _id: new Date().getTime().toString(),
              lessons: [],
              name: assignment.name,
              course: assignment.course,
            };
            state.assignments = [...state.assignments, newModule] as any;
          },
        updateAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === updatedAssignment._id
                    ? { ...assignment, ...updatedAssignment }
                    : assignment
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((assignment: any) =>
                assignment._id === assignmentId ? { ...assignment, editing: true } : assignment
            ) as any;
          }
    },
});

export const { deleteAssignment, updateAssignment,editAssignment,addModule } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

