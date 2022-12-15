import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const Important = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <StarIcon className="w-[1rem]" />
          <p className="text-xs">Important</p>
        </div>
        <p className="text-xs"> 0 </p>
      </div>
    </>
  );
};

export default Important;
