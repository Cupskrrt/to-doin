import React from 'react';

const NewTag = () => {
  return (
    <>
      <form className="text-xs ml-4 mt-3 flex items-center gap-2">
        <p>
          # <input type="text" className="border-2 w-[6rem]" />
        </p>
        <input type="color" name="tag-color" id="tag-color" className='w-[1.5rem]' />
      </form>
    </>
  );
};

export default NewTag;
