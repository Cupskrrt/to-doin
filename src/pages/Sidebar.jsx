import React from "react";
import { NavLink } from "react-router-dom";
import ThemeMode from "../components/ThemeMode";
import Today from "../components/Today";
import Important from "../components/Important";
import Todo from "../components/Todo";
import Tags from "../components/Tags";

const Sidebar = () => {
  const normalLink = "";
  const activeLink = "border-l-[2px] border-black";

  return (
    <div className="w-[15vw] h-[92vh] border-r-2">
      <div className="flex flex-col gap-7 p-5 mt-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <Today />
        </NavLink>
        <NavLink
          to="/to-do"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <Todo />
        </NavLink>
        <NavLink
          to="/important"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <Important />
        </NavLink>
        <hr />
        <div>
          <Tags />
        </div>
        <ThemeMode />
      </div>
    </div>
  );
};

export default Sidebar;
