import React from "react";
import { getTaskQuery } from "../utils/queries/taskQuery.js";
import TaskCard from "../components/TaskCard";

const TodoPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh]">
        <h1 className="font-bold">To-Do</h1>
        <TaskCard query={getTaskQuery()} />
      </div>
    </>
  );
};

export default TodoPage;
