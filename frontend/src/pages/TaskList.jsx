import { useState, useEffect } from 'react'
import { getTasks, deleteTask, updateTask } from '../services/tasks.service'
import TaskItem from '../components/TaskItem'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
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
      <button onClick={() => navigate('/new')}>Nueva Tarea</button>
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