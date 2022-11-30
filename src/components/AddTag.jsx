import React from 'react';
import {PlusIcon} from '@heroicons/react/24/outline';

const AddTag = () => {
  return (
    <>
      <div className="flex gap-4">
        <PlusIcon className="w-[1rem]" />
        <p className="text-xs">Add new tags</p>
      </div>
    </>
  );
};

export default AddTag