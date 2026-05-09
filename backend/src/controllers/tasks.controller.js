import { randomUUID } from 'crypto'
import { tasks } from '../data/tasks.js'

export const getTasks = (req, res) => {
  res.json(tasks)
}

export const createTask = (req, res) => {
  const { title, description } = req.body
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'El título es obligatorio' })
  }
  const newTask = {
    id: randomUUID(),
    title: title.trim(),
    description: description?.trim() || '',
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask)
  res.status(201).json(newTask)
}

export const updateTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id)
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' })
  }
  const { title, description, completed } = req.body
  if (title !== undefined && title.trim() === '') {
    return res.status(400).json({ error: 'El título no puede estar vacío' })
  }
  tasks[index] = {
    ...tasks[index],
    ...(title !== undefined && { title: title.trim() }),
    ...(description !== undefined && { description: description.trim() }),
    ...(completed !== undefined && { completed })
  }
  res.json(tasks[index])
}

export const deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id)
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' })
  }
  tasks.splice(index, 1)
  res.status(204).send()
}