import React from 'react';
import {
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const TaskCard = () => {
  return (
    <>
      <div className="flex justify-between items-center border-2 w-[80vw] p-4">
        <div className="flex flex-col">
          <h2 className="font-bold">Task</h2>
          <p className="text-xs">Task Date</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Tags</p>
          <p className="text-sm text-green-500"># Completed</p>
        </div>
        <div className="flex gap-2">
          <StarIcon className="w-[1.5rem]" />
          <PencilSquareIcon className="w-[1.5rem]" />
          <TrashIcon className="w-[1.5rem]" />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
