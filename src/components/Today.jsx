import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useQuery, useQueryClient } from "react-query";
import { getCountTaskToday } from "../utils/api/taskApi";

const Today = () => {
  const { data } = useQuery("countToday", getCountTaskToday);
  useQueryClient().invalidateQueries("countToday");
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <BellIcon className="w-[1rem]" />
        <p className="text-xs">Today</p>
      </div>
      <p className="text-xs">{data?.data}</p>
    </div>
  );
};

export default Today;
