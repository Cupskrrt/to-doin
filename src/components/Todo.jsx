import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const Todo = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <ClipboardIcon className="w-[1rem]" />
          <p className="text-xs">To-Do</p>
        </div>
        <p className="text-xs"> 0 </p>
      </div>
    </>
  );
};

export default Todo;
