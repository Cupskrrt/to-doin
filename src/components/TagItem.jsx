import React from "react";
import { useQuery } from "react-query";
import { getTag } from "../utils/api/tagApi.js";
import { Link } from "react-router-dom";
import ColorConfig from "../utils/ColorProfile.js";

const TagItem = () => {
  const { data } = useQuery("tag", getTag);
  return (
    <>
      {data?.data.map((tag) => {
        return (
          <div key={tag.title} className={ColorConfig[`${tag.color}`]}>
            <Link to={`/tag/${tag._id}`} className="text-xs">
              {tag.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default TagItem;
