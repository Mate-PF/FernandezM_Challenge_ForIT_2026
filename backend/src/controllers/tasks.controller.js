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