import React, { useState } from "react";
import { addTagQuery } from "../utils/queries/tagQuery.js";

const NewTag = ({ popup }) => {
  const [name, setName] = useState("");

  const { mutate } = addTagQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({
      title: name,
      name,
    });
    popup();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TAG NAME */}
      <input
        type="text"
        placeholder="tag name"
        className="ml-4 mt-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
};

export default NewTag;
