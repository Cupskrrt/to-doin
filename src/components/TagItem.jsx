import React from "react";
import ColorConfig from "../utils/ColorProfile.js";
import tags from "../utils/tags.js";

const TagItem = () => {
  return (
    <>
      {tags
        ? tags.map((tag) => {
            return (
              <div key={tag.title} className={ColorConfig[`${tag.color}`]}>
                <p className="text-xs">{tag.title}</p>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TagItem;
