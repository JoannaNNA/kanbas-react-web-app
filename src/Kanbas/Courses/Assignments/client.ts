import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to create assignment");
    }
    throw error;
  }
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  try {
    const response = await axios.put(
      `${ASSIGNMENTS_API}/${assignmentId}`,
      assignment
    );
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to update assignment");
    }
    throw error;
  }
}; 

