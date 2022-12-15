import axios from "axios"
import { useMutation, useQueryClient } from "react-query"

const task = (task) => {
  return axios.post('http://localhost:5011/task', {
    title: task.title
  })
}

const createTask = () => {
  const qc = useQueryClient()
  return useMutation(task, {
    /* onSuccess: (data) => {
      //qc.invalidateQueries('task')
    }*/
    onMutate: async (newTask) => {
      await qc.cancelQueries('task')
      const prevData = qc.getQueryData('task')
      qc.setQueryData('task', (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, { ...newTask }]
        }
      })
      return {
        prevData,
      }

    },
    onError: (_error, _task, context) => {
      qc.setQueryData('task', context.prevData)
    },
    onSettled: () => {
      qc.invalidateQueries('task')
    }
  })

}

export default createTask
