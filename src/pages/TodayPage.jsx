import React from 'react';
import TaskCard from '../components/TaskCard';

const TodayPage = () => {
  return (
    <>
      <div className="flex flex-col p-4 gap-5">
        <h1 className="font-bold">Today Page</h1>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
};

export default TodayPage;
