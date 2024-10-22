import { useReducer, useState } from 'react'
import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList'
import { initialTasks } from './data/tasks'
import taskReducer from './reducer/task-reducer';

const App = () => {
  // const [tasks, setTasks] = useState(initialTasks)
  const [tasks, dispatch] = useReducer(taskReducer,initialTasks)

  const getNextId = taskData => {
    const maxId = taskData.reduce((previous, current) =>
      previous && previous.id > current.id ? previous.id : current.id
    )
    return maxId + 1
  }

  // handlers
  const handleAddTask = taskText => {
    // setTasks([
    //   ...tasks,
    //   {
    //     id: getNextId(tasks),
    //     text: taskText,
    //     done: false,
    //   },
    // ])

    // using reducer to handle this
    dispatch({
      type:"added",
      text:taskText,
      id:getNextId(tasks)
    })
  }

  const handleChangeTask = task => {
    // const nextTask = tasks.map(t => {
    //   if (t.id === task.id) {
    //     return task
    //   } else {
    //     return t
    //   }
    // })
    // setTasks(nextTask)
    dispatch({
      type: "changed",
      task
    })
  }

  const handleDeleteTask = (taskId) =>{
    // setTasks(tasks.filter(t => t.id !== taskId))
    dispatch({
      type:"deleted",
      id:taskId
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App
