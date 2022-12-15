import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const AddTag = ({ onClick }) => {
  return (
    <>
      <div className="flex gap-3 mt-[1rem]" onClick={onClick}>
        <PlusIcon className="w-[1rem]" />
        <p className="text-xs">Add new tag</p>
      </div>
    </>
  );
};

export default AddTag;
