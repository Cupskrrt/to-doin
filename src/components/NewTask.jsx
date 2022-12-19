import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTask } from "../utils/api/taskApi";
import tags from "../utils/tags.js";

const NewTask = ({ popup }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState("");
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
      tags: tags,
    });
    popup();
  };

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
        <select name="tags">
          {tags
            ? tags.map((tag) => {
                return (
                  <option
                    key={`${tag.title}`}
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  >
                    {tag.title}
                  </option>
                );
              })
            : ""}
        </select>
        <label>Important</label>
        <input type="checkbox" onClick={(e) => setImportant(!important)} />
      </form>
    </>
  );
};

export default NewTask;
