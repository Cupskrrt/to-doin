import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import Profile from "../components/Profile";
import Notification from "../components/Notification";

const Navbar = () => {
  const [notif, setNotif] = useState(false);

  return (
    <>
      <div className="flex justify-between p-4 items-center border-b-2 h-[8vh]">
        <h1 className="font-bold text-2xl">to-doin</h1>
        <div className="flex gap-5">
          <BellIcon className="w-[1.5rem]" onClick={(e) => setNotif(!notif)} />
          {notif ? <Notification /> : null}
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
