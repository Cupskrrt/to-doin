import React from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useQuery, useQueryClient } from "react-query";
import { getCountTaskTodo } from "../utils/api/taskApi.js";

const Todo = () => {
  const { data } = useQuery("count", getCountTaskTodo);
  useQueryClient().invalidateQueries("count");
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
