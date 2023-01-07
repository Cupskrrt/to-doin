import axios from "axios";

const tagApi = axios.create({
  baseURL: "http://localhost:5011/api",
});

export const getTag = async () => {
  const res = await tagApi.get("/tag");
  return res;
};

export const getTagById = async ({ id }) => {
  return await tagApi.get(`/tag/${id}`, id);
};

export const addTag = async (tag) => {
  return await tagApi.post("/tag", tag);
};

export const deleteTag = async ({ id }) => {
  return await tagApi.delete(`/tag/${id}`, id);
};
