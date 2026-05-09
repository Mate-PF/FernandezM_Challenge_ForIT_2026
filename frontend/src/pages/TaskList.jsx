import { useState, useEffect } from 'react'
import { getTasks, createTask } from '../services/tasks.service'
import TaskItem from '../components/TaskItem'
import TaskForm from '../components/TaskForm'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  const handleCreate = async (task) => {
    await createTask(task)
    loadTasks()
  }

  return (
    <div className="container">
      <h1>Mis Tareas</h1>
      <TaskForm onSubmit={handleCreate} />
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList