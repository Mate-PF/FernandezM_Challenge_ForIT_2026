import { Router } from 'express'
import { getTasks, createTask } from '../controllers/tasks.controller.js'

const router = Router()

router.get('/', getTasks)
router.post('/', createTask)
router.put('/:id', (req, res) => {
  res.json({ message: `PUT task ${req.params.id}` })
})
router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE task ${req.params.id}` })
})

export default router