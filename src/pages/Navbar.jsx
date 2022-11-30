import React from 'react';
import {
  BellIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Profile from '../components/Profile';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-4 items-center border-b-2">
        <h1 className="font-bold text-2xl">to-doin</h1>
        <div className='flex gap-5'>
            <PlusIcon className="w-[1.5rem]" />
            <BellIcon className="w-[1.5rem]" />
            <Profile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
