import React from 'react';
import {HashtagIcon} from '@heroicons/react/24/outline';
import TagItem from './TagItem';

const Tags = () => {
  return (
    <>
      <div className="flex gap-4 mb-[1rem]">
        <HashtagIcon className="w-[1rem]" />
        <p className="text-xs">Tags</p>
      </div>
      <TagItem />
    </>
  );
};

export default Tags;
