import axios from "axios";
import { useQuery } from "react-query";

const getTask = () => {
  const { data, loading } = useQuery("task", () => {
    return axios.get("http://localhost:5011/task");
  });

  return { data, loading };
};

export default getTask;
