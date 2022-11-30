import React, {useState} from 'react';
import {BellIcon, PlusIcon} from '@heroicons/react/24/outline';
import Profile from '../components/Profile';
import NewTask from '../components/NewTask';

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="flex justify-between p-4 items-center border-b-2 h-[10vh]">
        <h1 className="font-bold text-2xl">to-doin</h1>
        <div className="flex gap-5">
          <PlusIcon className="w-[1.5rem] hover:cursor-pointer" onClick={e => setState(!state)} />
          <BellIcon className="w-[1.5rem]" />
          <Profile />
        </div>
      </div>
      {state && <NewTask />}
    </>
  );
};

export default Navbar;
