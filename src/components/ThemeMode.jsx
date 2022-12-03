import React, {useEffect, useState} from 'react';
import {SunIcon, MoonIcon} from '@heroicons/react/24/outline';

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
      <button className={`w-[2rem]`} onClick={() => setIcon(!icon)}>
        {!icon && <SunIcon />}
        {icon && <MoonIcon />}
      </button>
    </>
  );
};

export default ThemeMode;
