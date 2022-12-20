import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTask } from "../utils/api/taskApi";
import Select from "react-select";
import tags from "../utils/tags.js";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [important, setImportant] = useState(false);
  const qc = useQueryClient();

  const addTaskMutation = useMutation(addTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTaskMutation.mutate({
      title: title,
      important: important,
      date: date,
      tag: tag,
    });
    popup();
  };

  const options = tags.map((tag) => {
    return {
      value: tag.title,
      label: tag.title,
    };
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-xl p-3 w-[80vw] flex items-center gap-5"
      >
        <div className="flex flex-col">
          <input
            id="task-name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task"
            autoFocus
          />
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        {/*TAGS PAGE*/}
        <Select options={options} onChange={(e) => setTag(e.value)} />
        <label>Important</label>
        <input type="checkbox" onClick={(e) => setImportant(!important)} />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};

export default NewTask;
