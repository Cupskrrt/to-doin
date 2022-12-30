import React from "react";
import { getImportantTaskQuery } from "../utils/queries/taskQuery.js";
import TaskCard from "../components/TaskCard.jsx";

const ImportantPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh]">
        <h1 className="font-bold">Important</h1>
        <TaskCard query={getImportantTaskQuery()} />
      </div>
    </>
  );
};

export default ImportantPage;
