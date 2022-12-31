import React, { useState } from "react";
import { getTagQuery } from "../utils/queries/tagQuery.js";
import { Link } from "react-router-dom";
import ColorConfig from "../utils/ColorProfile.js";
import NewTag from "../components/NewTag.jsx";

const TagItem = () => {
  const [newTag, setNewTag] = useState(false);
  const { data } = getTagQuery();

  const isHidden = () => {
    setNewTag(!newTag);
  };

  return (
    <>
      {data?.data.map((tag) => {
        return (
          <div key={tag._id} className="ml-4">
            <Link to={`/tag/${tag._id}`} className="text-xs">
              {tag.name}
            </Link>
          </div>
        );
      })}
      {newTag ? (
        <NewTag />
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
