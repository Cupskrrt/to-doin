import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ThemeMode from '../components/ThemeMode';
import Today from '../components/Today';
import Important from '../components/Important';
import Todo from '../components/Todo';
import Calendar from '../components/Calendar';
import Tags from '../components/Tags';
import AddTag from '../components/AddTag';
import NewTag from '../components/NewTag';

const Sidebar = () => {
  const [tagShow, setTagShow] = useState(false);

  function showTag() {
    setTagShow(!tagShow)
  }

  return (
    <div className="w-[15vw] h-[90vh] border-r-2">
      {/* TODO: Change the Link into NavLink */}
      <div className="flex flex-col gap-6 p-5">
        <Link to="/">
          <Today />
        </Link>
        <Link to="/to-do">
          <Todo />
        </Link>
        <Link to="/important">
          <Important />
        </Link>
        <Link to="/calendar">
          <Calendar />
        </Link>
        <hr />
        <div>
          <Tags />
          {tagShow && <NewTag />}
          <AddTag onClick={showTag}/>
        </div>
        <ThemeMode />
      </div>
    </div>
  );
};

export default Sidebar;
