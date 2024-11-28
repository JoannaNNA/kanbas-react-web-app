import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const generateNewId = () => {
    const existingIds = assignments
        .map(a => a._id)
        .filter(id => id.startsWith('A'))
        .map(id => parseInt(id.slice(1)));
    const maxId = Math.max(...existingIds, 0);
    return `A${(maxId + 1).toString().padStart(3, '0')}`;
};

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: generateNewId(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                start_date: assignment.start_date,
                due_date: assignment.due_date,
                course: assignment.course
            };
            state.assignments = [...state.assignments, newAssignment];
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === payload._id 
                    ? { 
                        ...assignment,
                        ...payload,
                        points: payload.points,
                        start_date: payload.start_date,
                        due_date: payload.due_date
                      }
                    : assignment
            );
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment} =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;

