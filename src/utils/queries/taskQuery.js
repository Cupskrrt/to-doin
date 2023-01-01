import {
  getImportantTask,
  getTask,
  getTodayTask,
  getTaskbyTag,
  getCountTaskTodo,
  getCountTaskImportant,
  getCountTaskToday,
  addTask,
  patchTask,
  deleteTask,
} from "../api/taskApi.js";
import { useQuery, useQueryClient, useMutation } from "react-query";

export const getTaskQuery = () => {
  return useQuery("task", getTask);
};

export const getImportantTaskQuery = () => {
  return useQuery("task", getImportantTask);
};

export const getTodayTaskQuery = () => {
  return useQuery("task", getTodayTask);
};

export const getTaskbyTagQuery = (tagId) => {
  return useQuery(["task", tagId], () => getTaskbyTag(tagId));
};

export const getCountTaskTodoQuery = () => {
  return useQuery("countTodo", getCountTaskTodo);
};

export const getCountTaskImportantQuery = () => {
  return useQuery("countImportant", getCountTaskImportant);
};

export const getCountTaskTodayQuery = () => {
  return useQuery("countToday", getCountTaskToday);
};

export const addTaskQuery = () => {
  const qc = useQueryClient();
  return useMutation(addTask, {
    onMutate: async (newTask) => {
      await qc.cancelQueries("task");
      const prevData = qc.getQueryData("task");
      qc.setQueryData("task", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, newTask],
        };
      });
      return {
        prevData,
      };
    },
    onError: (_error, _task, context) => {
      qc.setQueryData("task", context.prevData);
    },
    onSettled: () => {
      qc.invalidateQueries("task");
    },
  });
};

export const updateTaskQuery = () => {
  const qc = useQueryClient();
  return useMutation(patchTask, {
    onMutate: async (updatedTask) => {
      await qc.cancelQueries(["task", updatedTask.important]);
      const prevData = qc.getQueryData(["task", updatedTask.important]);
      qc.setQueryData(["task", updatedTask.important], prevData);
      return {
        prevData,
        updatedTask,
      };
    },
    onError: (_error, updatedTask, context) => {
      qc.setQueryData(["task", updatedTask.important], context.prevData);
    },
    onSettled: (updatedTask) => {
      qc.invalidateQueries(["task", updatedTask.important]);
    },
  });
};

export const deleteTaskQuery = () => {
  const qc = useQueryClient();
  return useMutation(deleteTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });
};
