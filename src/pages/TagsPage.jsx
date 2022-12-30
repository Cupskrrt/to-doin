import React from "react";
import TaskCard from "../components/TaskCard.jsx";
import { getTaskbyTagQuery } from "../utils/queries/taskQuery.js";
import { useParams } from "react-router-dom";

const TagsPage = () => {
  const { tagId } = useParams();

  return (
    //TODO: FIGURE OUT HOW TO MAKE THIS PAGE SHOWUP
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh] overflow-y-auto dark:bg-gray-800 dark:text-white">
        <h1 className="font-bold">{tagId}</h1>
        <TaskCard query={getTaskbyTagQuery(tagId)} />
      </div>
    </>
  );
};

export default TagsPage;
