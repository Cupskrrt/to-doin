import React from 'react';
import {BellIcon} from '@heroicons/react/24/outline';

const Today = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <BellIcon className="w-[1rem]" />
        <p className="text-xs">Today</p>
      </div>
      <p className="text-xs"> 0 </p>
    </div>
  );
};

export default Today;
