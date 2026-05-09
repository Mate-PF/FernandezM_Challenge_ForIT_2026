import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, updateTask, getTasks } from '../services/tasks.service'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) loadTask()
  }, [id])

  const loadTask = async () => {
    const tasks = await getTasks()
    const task = tasks.find(t => t.id === id)
    if (task) {
      setTitle(task.title)
      setDescription(task.description)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await updateTask(id, { title, description })
    } else {
      await createTask({ title, description })
    }
    navigate('/')
  }

  return (
    <div className="container">
      <h1>{id ? 'Editar Tarea' : 'Nueva Tarea'}</h1>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="form-actions">
          <button type="submit">{id ? 'Guardar cambios' : 'Crear tarea'}</button>
          <button type="button" onClick={() => navigate('/')}>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm