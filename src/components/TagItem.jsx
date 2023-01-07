import React, { useState } from "react";
import { getTagQuery, deleteTagQuery } from "../utils/queries/tagQuery.js";
import { Link } from "react-router-dom";
import NewTag from "../components/NewTag.jsx";
import { TrashIcon } from "@heroicons/react/24/outline";

const TagItem = () => {
  const [newTag, setNewTag] = useState(false);
  const { data } = getTagQuery();
  const { mutate } = deleteTagQuery();

  const isHidden = () => {
    setNewTag(!newTag);
  };

  return (
    <>
      {data?.data.map((tag) => {
        return (
          <div key={tag._id} className="flex justify-between ml-4 mb-2">
            <Link to={`/tag/${tag._id}`} className="text-xs">
              {tag.name}
            </Link>
            <TrashIcon
              className="w-4 items-end hover:cursor-pointer"
              onClick={() =>
                mutate({
                  id: tag._id,
                })
              }
            />
          </div>
        );
      })}
      {newTag ? (
        <NewTag popup={isHidden} />
      ) : (
        <p
          onClick={isHidden}
          className="sticky bottom-0 hover:cursor-pointer border-2 rounded-xl w-[7vw] text-center p-1 bg-white text-xs"
        >
          Add New Tag +
        </p>
      )}
    </>
  );
};

export default TagItem;
