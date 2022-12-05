import React, {useState} from 'react';
import axios from 'axios';
import {XMarkIcon} from '@heroicons/react/24/outline';

const NewTask = ({popup}) => {
  const [title, setTitle] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post(
        'http://localhost:5011/task',
        {
          title: title,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(popup);
  }

  return (
    <>
      {/* TODO: Refactor code to make it cleaner */}
      {/* TODO: Style new task to make it more beautiful */}
      <div className="fixed w-screen backdrop-blur-sm h-screen z-10">
        <div className="fixed bg-gray-400 right-[25%] bottom-[25%] top-[25%] left-[25%] z-10">
          <div className='flex justify-between p-5'>
            <h1 className="font-bold text-xl">New Task</h1>
            <XMarkIcon className="w-[2rem] cursor-pointer" onClick={popup} />
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="task-title">Task</label>
            <input
              id="task-title"
              value={title}
              type="text"
              className="border-2 m-2"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="task-date">Date</label>
            <input type="date" />
            <label htmlFor="task-tag">Tag</label>
            {/* TODO: Create multiselect for tags */}
            <button className="border-2 w-[20rem]">Add Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTask;
