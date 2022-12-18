import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTask, deleteTask, patchTask } from "../utils/api/taskApi";
import NewTask from "../components/NewTask";
import {
  PencilSquareIcon,
  TrashIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const TaskCard = () => {
  const qc = useQueryClient();

  const [hidden, setHidden] = useState(false);

  const isHidden = () => {
    setHidden(!hidden);
  };

  const { data } = useQuery("task", getTask);

  const deleteTaskMutation = useMutation(deleteTask, {
    onSuccess: () => qc.invalidateQueries("task"),
  });

  const updateTaskMutation = useMutation(patchTask, {
    onSuccess: () => qc.invalidateQueries("task"),
  });

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
              <p>{item.date ? item.date : "date"}</p>
            </div>
            <p>Tags</p>
            <div className="flex gap-5">
              <PencilSquareIcon className="w-[1.5rem]" />
              {item.important ? (
                <StarIconSolid
                  className="w-[1.5rem]"
                  id={item._id}
                  onClick={(e) =>
                    updateTaskMutation.mutate({
                      id: item._id,
                      important: false,
                    })
                  }
                />
              ) : (
                <StarIcon
                  className="w-[1.5rem]"
                  id={item._id}
                  onClick={(e) =>
                    e.updateTaskMutation.mutate({
                      id: item._id,
                      important: true,
                    })
                  }
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
