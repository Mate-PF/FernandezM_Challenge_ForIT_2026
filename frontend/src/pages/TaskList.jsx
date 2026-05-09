import { useState, useEffect } from 'react'
import { getTasks, createTask, deleteTask, updateTask } from '../services/tasks.service'
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

  const handleDelete = async (id) => {
    await deleteTask(id)
    loadTasks()
  }

  const handleToggle = async (task) => {
    await updateTask(task.id, { completed: !task.completed })
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
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList