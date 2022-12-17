import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTask, addTask, patchTask, deleteTask } from "../utils/api/taskApi";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");
  const qc = useQueryClient();

  const addTaskMutation = useMutation(addTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  const patchTaskMutation = useMutation(patchTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTaskMutation.mutate({ title: title });
    setTitle("");
    popup();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-xl p-3 w-[80vw]"
      >
        <label htmlFor="task-name">Task</label>
        <input
          id="task-name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task"
          autoFocus
        />
      </form>
    </>
  );
};

export default NewTask;
