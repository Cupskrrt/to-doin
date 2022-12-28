import React from "react";
import { getTaskOngoing } from "../utils/api/taskApi.js";
import TaskCard from "../components/TaskCard.jsx";
import { useParams } from "react-router-dom";

const TagsPage = () => {
  const { tagId } = useParams();
  return (
    //TODO: FIX THIS PAGE CONTENT
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh] overflow-y-auto dark:bg-gray-800 dark:text-white">
        <h1 className="font-bold">{tagId}</h1>
        <p>KONTOL</p>
        {/* <TaskCard query={getTaskOngoing} task="task" /> */}
      </div>
    </>
  );
};

export default TagsPage;
