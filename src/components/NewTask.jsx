import React, {useState} from 'react';
import axios from 'axios';

const NewTask = () => {
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(
      'http://localhost:5011/task',
      {
        title: title,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  }

  return (
    <>
      {/* TODO: Refactor code to make it cleaner */}
      {/* TODO: Figure out how to clone this component on button click */}
      {/* TODO: Style new task to make it more beautiful */}
      <div className="absolute bg-gray-400 right-[25%] bottom-[25%] top-[25%] left-[25%]">
        <h1 className="font-bold text-xl">New Task</h1>
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
          {/* TODO: Add other item in the task (Date, Tags, Desc) */}

          <button className="border-2">Add Task</button>
        </form>
      </div>
    </>
  );
};

export default NewTask;
