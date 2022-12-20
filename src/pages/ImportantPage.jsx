import React from "react";
import TaskImportant from "../components/TaskImportant";

const ImportantPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh]">
        <h1 className="font-bold">Important</h1>
        <TaskImportant />
      </div>
    </>
  );
};

export default ImportantPage;
