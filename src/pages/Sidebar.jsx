import React from 'react';
import {Link} from 'react-router-dom';
import ThemeMode from '../components/ThemeMode';
import Today from '../components/Today';
import Important from '../components/Important';
import Todo from '../components/Todo';
import Calendar from '../components/Calendar';
import Tags from '../components/Tags';
import TagItem from '../components/TagItem';
import AddTag from '../components/AddTag';

const Sidebar = () => {
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
          <TagItem />
        </div>
        <AddTag />
        <ThemeMode />
      </div>
    </div>
  );
};

export default Sidebar;
