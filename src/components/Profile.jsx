import React from 'react';
import defaultPicture from '../assets/default_user.png';

const Profile = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <img src={defaultPicture} alt="user" className="w-[1.5rem] h-[1.5rem]" />
      </div>
    </>
  );
};

export default Profile;
