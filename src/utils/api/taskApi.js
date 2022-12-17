import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:5011",
});

export const getTask = async () => {
  const res = await taskApi.get("/task");
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

export default taskApi;
