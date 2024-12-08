import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: new Date().getTime().toString(),
                title: assignment.name,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                availableUntil: assignment.availableUntil,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment];
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== assignmentId
            );
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

export const { addAssignment, deleteAssignment, updateAssignment,editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

