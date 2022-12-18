import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTask } from "../utils/api/taskApi";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");
  const [important, setImportant] = useState(false);
  const qc = useQueryClient();

  const addTaskMutation = useMutation(addTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTaskMutation.mutate({ title: title, important: important });
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
        <label>Important</label>
        <input type="checkbox" onClick={(e) => setImportant(!important)} />
      </form>
    </>
  );
};

export default NewTask;
