import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getImportantTask, deleteTask, patchTask } from "../utils/api/taskApi";
import { TrashIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const TaskImportant = () => {
  const qc = useQueryClient();
  const { data } = useQuery("task", getImportantTask);
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
              <p>
                {item.date ? new Date(item.date).toLocaleDateString() : "date"}
              </p>
            </div>
            <div>
              <p>Tags</p>
              <p>{item.tag ? item.tag : "tag"}</p>
            </div>
            <div className="flex gap-5">
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
                  className="w-[1.5rem] hover:cursor-pointer"
                  id={item._id}
                  onClick={(e) =>
                    updateTaskMutation.mutate({
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
    </>
  );
};

export default TaskImportant;
