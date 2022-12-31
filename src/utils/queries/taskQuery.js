import {
  getImportantTask,
  getTask,
  getTodayTask,
  getTaskbyTag,
  getCountTaskTodo,
  getCountTaskImportant,
  getCountTaskToday,
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

export const getCountTaskTodoQuery = () => {
  const { data, isLoading } = useQuery("countTodo", getCountTaskTodo);
  return { data, isLoading };
};

export const getCountTaskImportantQuery = () => {
  const { data, isLoading } = useQuery("countImportant", getCountTaskImportant);
  return { data, isLoading };
};

export const getCountTaskTodayQuery = () => {
  const { data, isLoading } = useQuery("countToday", getCountTaskToday);
  return { data, isLoading };
};
