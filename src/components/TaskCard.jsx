import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTask, deleteTask } from "../utils/api/taskApi";
import NewTask from "../components/NewTask";
import {
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const TaskCard = () => {
  const [hidden, setHidden] = useState(false);
  const [fav, setFav] = useState(false);

  const isHidden = () => {
    setHidden(!hidden);
  };

  const qc = useQueryClient();

  const { data } = useQuery("task", getTask);
  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => {
      qc.invalidateQueries("task");
    },
  });

  //TODO: Create the rest of form input
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
              <p>Task Date</p>
            </div>
            <p>Tags</p>
            <div className="flex gap-5">
              <PencilSquareIcon className="w-[1.5rem]" />
              {/* TODO: Remake this to set fav for important*/}
              {fav ? (
                <StarIconSolid
                  className="w-[1.5rem]"
                  onClick={(e) => setFav(!fav)}
                />
              ) : (
                <StarIcon
                  className="w-[1.5rem]"
                  onClick={(e) => setFav(!fav)}
                />
              )}
              <TrashIcon
                className="w-[1.5rem] hover:cursor-pointer"
                onClick={(e) => deleteTaskMutation.mutate({ id: item._id })}
              />
            </div>
          </div>
        );
      })}
      {hidden ? (
        <NewTask popup={isHidden} />
      ) : (
        <p
          onClick={isHidden}
          className="sticky bottom-0 hover:cursor-pointer border-2 rounded-xl w-[80vw] text-center p-3 bg-white"
        >
          Add New Task +
        </p>
      )}
    </>
  );
};

export default TaskCard;
