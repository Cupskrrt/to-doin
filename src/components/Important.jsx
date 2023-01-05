import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { useQueryClient } from "react-query";
import { getCountTaskImportantQuery } from "../utils/queries/taskQuery.js";

const Important = () => {
  const { data } = getCountTaskImportantQuery();
  useQueryClient().invalidateQueries("countImportant");
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <StarIcon className="w-[1rem]" />
          <p className="text-xs">Important</p>
        </div>
        <p className="text-xs">{data?.data}</p>
      </div>
    </>
  );
};

export default Important;
