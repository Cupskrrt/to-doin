import React from 'react';
import TaskCard from '../components/TaskCard';

const TodoPage = () => {
  return (
    <>
      <div className="flex flex-col p-4 gap-5">
        <h1 className="font-bold">To-Do</h1>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
};

export default TodoPage;
