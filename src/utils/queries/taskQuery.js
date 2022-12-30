import {
  getImportantTask,
  getTask,
  getTodayTask,
  getTaskbyTag,
} from "../api/taskApi.js";
import { useQuery } from "react-query";

export const getTaskQuery = () => {
  const { data, isLoading, isError } = useQuery("task", getTask);
  return { data, isLoading, isError };
};

export const getImportantTaskQuery = () => {
  const { data, isLoading, isError } = useQuery("task", getImportantTask);
  return { data, isLoading, isError };
};

export const getTodayTaskQuery = () => {
  const { data, isLoading, isError } = useQuery("task", getTodayTask);
  return { data, isLoading, isError };
};

export const getTaskbyTagQuery = (tagId) => {
  const { data, isLoading, isError } = useQuery(["task", tagId], () =>
    getTaskbyTag(tagId)
  );
  return { data, isLoading, isError };
};
