import React from 'react';
import TaskCard from '../components/TaskCard';

const ImportantPage = () => {
  return (
    <>
      <div className='flex flex-col p-4 gap-5'>
        <h1 className='font-bold'>Important</h1>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
};

export default ImportantPage;
