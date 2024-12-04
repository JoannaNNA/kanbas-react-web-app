import axios from 'axios';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
};
export const findModuleById = async (moduleId: string) => {
  const response = await axios.get(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export const createModule = async (module: any) => {
  const { data } = await axiosWithCredentials.post(MODULES_API, module);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${MODULES_API}?courseId=${courseId}`);
  return response.data;
};

export const findAllModules = async () => {
  const { data } = await axiosWithCredentials.get(MODULES_API);
  return data;
};

export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module
  );
  return data;
};
