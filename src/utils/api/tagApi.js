import axios from "axios";

const tagApi = axios.create({
  baseURL: "http://localhost:5011/api",
});

export const getTag = async () => {
  const res = await tagApi.get("/tag");
  return res;
};

export const addTag = async (tag) => {
  return await tagApi.post("/", tag);
};
