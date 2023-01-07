import React, { useState } from "react";
import { addTaskQuery } from "../utils/queries/taskQuery.js";
import { getTagQuery } from "../utils/queries/tagQuery.js";
import Select from "react-select";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [important, setImportant] = useState(false);

  const { mutate } = addTaskQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({
      title: title,
      important: important,
      date: date,
      tag: tag,
    });
    popup();
  };

  const { data } = getTagQuery();

  const options = data?.data.map((tag) => {
    return {
      value: tag._id,
      label: tag.name,
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
        <Select options={options} onChange={(e) => setTag(e.value)} />
        <label>Important</label>
        <input type="checkbox" onClick={() => setImportant(!important)} />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};

export default NewTask;
