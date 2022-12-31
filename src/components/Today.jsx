import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "react-query";
import { getCountTaskTodayQuery } from "../utils/queries/taskQuery.js";

const Today = () => {
  const { data } = getCountTaskTodayQuery();
  useQueryClient().invalidateQueries("count");
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
