import React, {useState} from 'react';
import axios from 'axios';

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
      {/* TODO: Figure out how to close this component on button click */}
      {/* TODO: Style new task to make it more beautiful */}
      <div className="fixed w-screen backdrop-blur-sm h-screen z-10">
        <div className="fixed bg-gray-400 right-[25%] bottom-[25%] top-[25%] left-[25%] z-10">
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
            <button className="border-2 w-[20rem]">Add Task</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTask;
