import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useQuery, useQueryClient } from "react-query";
import { getCountTaskTodoQuery } from "../utils/queries/taskQuery.js";

const Todo = () => {
  const { data } = getCountTaskTodoQuery();
  useQueryClient().invalidateQueries("countTodo");
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <ClipboardIcon className="w-[1rem]" />
          <p className="text-xs">To-Do</p>
        </div>
        <p className="text-xs">{data?.data}</p>
      </div>
    </>
  );
};

export default Todo;
