import React from 'react';
import {HashtagIcon} from '@heroicons/react/24/outline';

const Tags = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <HashtagIcon className="w-[1rem]" />
        <p className="text-xs">Tags</p>
      </div>
    </>
  );
};

export default Tags;
