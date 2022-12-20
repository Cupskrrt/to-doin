import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:5011/api",
});

export const getTask = async () => {
  const res = await taskApi.get("/task");
  return res;
};

export const getImportantTask = async () => {
  const res = await taskApi.get("/task/important");
  return res;
};

export const getTodayTask = async () => {
  const res = await taskApi.get("/task/today");
  return res;
};

export const addTask = async (task) => {
  return await taskApi.post("/task", task);
};

export const patchTask = async (task) => {
  return await taskApi.patch(`/task/${task.id}`, task);
};

export const deleteTask = async ({ id }) => {
  return await taskApi.delete(`/task/${id}`, id);
};

export const getCountTaskTodo = async () => {
  const res = await taskApi.get("/task/count/to-do");
  return res;
};

export const getCountTaskImportant = async () => {
  const res = await taskApi.get("/task/count/important");
  return res;
};

export const getCountTaskToday = async () => {
  const res = await taskApi.get("/task/count/today");
  return res;
};

export default taskApi;
