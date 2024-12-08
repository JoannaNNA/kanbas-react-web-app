import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async ( assignment: any) => {
  const response = await axios.post(`${MODULES_API}/assignments`, assignment);
  return response.data;
};

export const findAssignmentsForModule = async (moduleId: string) => {
  const response = await axios.get(`${MODULES_API}/${moduleId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  console.log("delete deleteAssignment")
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  console.log(response)
  return response.data;
};