import React from "react";
import { NavLink } from "react-router-dom";
import ColorConfig from "../utils/ColorProfile.js";
import tags from "../utils/tags.js";

const TagItem = () => {
  return (
    //TODO: FIGURE OUT HOW TO LINK TAG ITEM TO THE RESPECTIVE UI
    <>
      {tags
        ? tags.map((tag) => {
            return (
              <div key={tag.title} className={ColorConfig[`${tag.color}`]}>
                <NavLink to="/" className="text-xs">
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
