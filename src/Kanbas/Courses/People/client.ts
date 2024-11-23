import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000";
const USERS_API = `${API_BASE}/api/users`;
const COURSES_API = `${API_BASE}/api/courses`;

export const findEnrollmentsForCourse = async (courseId: string) => {
  try {
    const response = await axios.get(`${COURSES_API}/${courseId}/enrollments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching enrollments:", error);
    throw error;
  }
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
}; 