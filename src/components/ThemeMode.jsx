import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeMode = () => {
  const [icon, setIcon] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    switch (icon) {
      case true:
        element.classList.add('dark');
        break;
      case false:
        element.classList.remove('dark');
        break;
      default:
        break;
    }
  }, [icon]);

  return (
    <>
      <button className="w-[3rem] absolute bottom-[3.5%] left-[2%] border-2 p-2 rounded-lg border-black" onClick={() => setIcon(!icon)}>
        {!icon && <SunIcon />}
        {icon && <MoonIcon />}
      </button>
    </>
  );
};

export default ThemeMode;
