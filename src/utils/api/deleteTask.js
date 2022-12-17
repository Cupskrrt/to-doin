import axios from "axios";

const deleteTask = (taskId) => {
  axios.delete(`http://localhost:5011/task/${taskId}`);
};

export default deleteTask;
