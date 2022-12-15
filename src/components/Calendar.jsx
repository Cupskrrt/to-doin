import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const Calendar = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CalendarDaysIcon className="w-[1rem]" />
        <p className="text-xs">Calendar</p>
      </div>
    </>
  );
};

export default Calendar;
