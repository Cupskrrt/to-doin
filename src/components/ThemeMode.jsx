import React from 'react';
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';

const ThemeMode = () => {
  return (
    <>
      {/* TODO: Create theme mode using css */}
      <div>
        <SunIcon className="w-[2rem]" />
        <MoonIcon className="w-[2rem]" />
      </div>
    </>
  );
};

export default ThemeMode;
