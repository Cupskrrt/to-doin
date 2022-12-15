import React, { useState } from "react";
import createTask from "../utils/api/createTask";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");

  const { mutate } = createTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title };
    mutate(task);
    popup();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-xl p-3 w-[80vw]"
      >
        <label>Task</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task"
        />
      </form>
    </>
  );
};

export default NewTask;
