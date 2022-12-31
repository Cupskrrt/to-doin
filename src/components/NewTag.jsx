import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTag } from "../utils/api/tagApi.js";

const NewTag = () => {
  const [name, setName] = useState("");
  const qc = useQueryClient();

  const addTagMutations = useMutation(addTag, {
    onSuccess: () => {
      qc.invalidateQueries;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTagMutations.mutate({
      title: name,
      name,
    });
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
