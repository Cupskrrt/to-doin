import { addTag, getTag } from "../api/tagApi.js";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const getTagQuery = () => {
  const { data, isLoading, isError } = useQuery("tag", getTag);
  return { data, isLoading, isError };
};

export const addTagQuery = () => {
  const qc = useQueryClient();
  return useMutation(addTag, {
    onMutate: async (newTag) => {
      await qc.cancelQueries("tag");
      const prevData = qc.getQueryData("tag");
      qc.setQueryData("tag", (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, newTag],
        };
      });
      return {
        prevData,
      };
    },
    onError: (_error, _tag, context) => {
      qc.setQueryData("tag", context.prevData);
    },
    onSettled: () => {
      qc.invalidateQueries("tag");
    },
  });
};
