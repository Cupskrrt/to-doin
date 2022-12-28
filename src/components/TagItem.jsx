import React from "react";
import { NavLink } from "react-router-dom";
import ColorConfig from "../utils/ColorProfile.js";
import tags from "../utils/tags.js";

const TagItem = () => {
  return (
    <>
      {tags
        ? tags.map((tag) => {
            return (
              <div key={tag.title} className={ColorConfig[`${tag.color}`]}>
                <NavLink to={`/tag/${tag.title}`} className="text-xs">
                  {tag.title}
                </NavLink>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TagItem;
