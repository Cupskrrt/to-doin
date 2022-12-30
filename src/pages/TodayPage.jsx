import React from "react";
import { getTodayTaskQuery } from "../utils/queries/taskQuery.js";
import TaskCard from "../components/TaskCard";

const TodayPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh] overflow-y-auto dark:bg-gray-800 dark:text-white">
        <h1 className="font-bold">Today Page</h1>
        <TaskCard query={getTodayTaskQuery()} />
      </div>
    </>
  );
};

export default TodayPage;
