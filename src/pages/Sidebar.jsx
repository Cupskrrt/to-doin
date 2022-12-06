import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
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

  const normalLink = '';
  const activeLink = 'border-l-[2px] border-black';

  function showTag() {
    setTagShow(!tagShow);
  }

  return (
    <div className="w-[15vw] h-[90vh] border-r-2">
      {/* TODO: Change the Link into NavLink */}
      <div className="flex flex-col gap-7 p-5 mt-2">
        <NavLink
          to="/"
          className={({isActive}) => (isActive ? activeLink : normalLink)}
        >
          <Today />
        </NavLink>
        <NavLink
          to="/to-do"
          className={({isActive}) => (isActive ? activeLink : normalLink)}
        >
          <Todo />
        </NavLink>
        <NavLink
          to="/important"
          className={({isActive}) => (isActive ? activeLink : normalLink)}
        >
          <Important />
        </NavLink>
        <NavLink
          to="/calendar"
          className={({isActive}) => (isActive ? activeLink : normalLink)}
        >
          <Calendar />
        </NavLink>
        <hr />
        <div>
          <Tags />
          {tagShow && <NewTag />}
          <AddTag onClick={showTag} />
        </div>
        <ThemeMode />
      </div>
    </div>
  );
};

export default Sidebar;
