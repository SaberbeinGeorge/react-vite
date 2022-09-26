import {createContext, useState, useEffect} from 'react';
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvaider(props) {

  const [tasks, setTasks] = useState([])
    
  useEffect(() => {
      setTasks(data)
  }, [])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description,
  }])
}

  function deleteTask(taskID) {
    setTasks(tasks.filter(task => task.id !== taskID))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
