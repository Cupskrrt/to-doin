import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTag } from "../utils/api/tagApi.js";
import { NavLink } from "react-router-dom";
import ColorConfig from "../utils/ColorProfile.js";

const TagItem = () => {
  const { data } = useQuery("tag", getTag);
  return (
    <>
      {data?.data.map((tag) => {
        return (
          <div key={tag.title} className={ColorConfig[`${tag.color}`]}>
            <NavLink to={`/tag/${tag._id}`} className="text-xs">
              {tag.title}
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

export default TagItem;
