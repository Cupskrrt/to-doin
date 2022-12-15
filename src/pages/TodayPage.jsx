import React from 'react';
import TaskCard from '../components/TaskCard';

const TodayPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 gap-5 w-[85vw] h-[90vh] overflow-y-auto dark:bg-gray-800 dark:text-white">
        {/* TODO: Make the title sticky */}
        <h1 className="font-bold">Today Page</h1>
        <TaskCard />
      </div>
    </>
  );
};

export default TodayPage;
