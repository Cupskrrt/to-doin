import React, { useState } from "react";
import NewTask from "../components/NewTask";
import Task from "./Task";

const TaskCard = ({ query }) => {
  const [newTask, setNewTask] = useState(false);

  const isHidden = () => {
    setNewTask(!newTask);
  };

  return (
    <>
      <Task query={query} />
      {newTask ? (
        <NewTask popup={isHidden} />
      ) : (
        <p
          onClick={isHidden}
          className="sticky bottom-0 hover:cursor-pointer border-2 rounded-xl w-[80vw] text-center p-3 bg-white"
        >
          Add New Task +
        </p>
      )}
    </>
  );
};

export default TaskCard;
