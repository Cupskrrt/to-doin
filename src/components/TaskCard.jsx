import React, {useState, useEffect} from 'react';
import {
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {StarIcon as StarIconSolid} from '@heroicons/react/24/solid';

const TaskCard = () => {
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    switch (icon) {
      case true:
        // Create set favorite to db
        break;
      case false:
        // Create unset favorite to db
        break;
    }
  });

  return (
    <>
      <div className="flex justify-between items-center border-2 gap-10 p-4 w-[80vw]">
        <div className="flex flex-col">
          <h2 className="font-bold">Task</h2>
          <p className="text-xs">Task Date</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Tags</p>
          <p className="text-sm text-green-500"># Completed</p>
        </div>
        <div className="flex gap-2">
          <button className="w-[1.5rem]" onClick={() => setIcon(!icon)}>
            {!icon && <StarIcon />}
            {icon && <StarIconSolid />}
          </button>
          <PencilSquareIcon className="w-[1.5rem]" />
          <TrashIcon className="w-[1.5rem]" />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
