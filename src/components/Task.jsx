import React from "react";
import {
  deleteTaskQuery,
  updateTaskQuery,
} from "../utils/queries/taskQuery.js";
import { TrashIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const Task = ({ query }) => {
  const { data } = query;
  const { mutate: updateTask } = updateTaskQuery();
  const { mutate: deleteTask } = deleteTaskQuery();

  return (
    <>
      {data?.data.map((item) => {
        return (
          <div
            key={item._id}
            className="flex justify-between items-center w-[80vw] p-3 border-2 rounded-xl"
          >
            <div>
              <h2>{item.title}</h2>
              <p>
                {item.date ? new Date(item.date).toLocaleDateString() : "date"}
              </p>
            </div>
            <div>
              <p>Tag</p>
              <p>{item.tag ? item.tag.name : "Tag Deleted"}</p>
            </div>
            <div className="flex gap-5">
              {/* TODO: MAKE IMPORTANT ITEM AND DELETE ITEM OPTIMISTIC UPDATE  */}
              {item.important ? (
                <StarIconSolid
                  className="w-[1.5rem] hover:cursor-pointer"
                  id={item._id}
                  onClick={(e) =>
                    updateTask({
                      id: item._id,
                      important: false ?? item.important,
                    })
                  }
                />
              ) : (
                <StarIcon
                  className="w-[1.5rem] hover:cursor-pointer"
                  id={item._id}
                  onClick={(e) =>
                    updateTask({
                      id: item._id,
                      important: true ?? item.important,
                    })
                  }
                />
              )}
              <TrashIcon
                className="w-[1.5rem] hover:cursor-pointer"
                onClick={(e) => deleteTask({ id: item._id })}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Task;
