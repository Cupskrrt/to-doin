import { addTag, getTag } from "../api/tagApi.js";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const getTagQuery = () => {
  const { data, isLoading, isError } = useQuery("tag", getTag);
  return { data, isLoading, isError };
};

// export const addTagQuery = (name) => {
//   const qc = useQueryClient();
//   const addTagMutation = useMutation(addTag, {
//     onSuccess: () => {
//       qc.invalidateQueries("tag");
//     },
//   });
//
//   addTagMutation.mutate({
//     title: name,
//     name: name,
//   });
//   return addTagMutation;
// };
