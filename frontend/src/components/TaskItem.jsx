import { useNavigate } from 'react-router-dom'

const TaskItem = ({ task, onDelete, onToggle }) => {
  const navigate = useNavigate()

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default TaskItem