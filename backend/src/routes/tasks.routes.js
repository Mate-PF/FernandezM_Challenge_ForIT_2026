import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'GET tasks funcionando ✅' })
})

router.post('/', (req, res) => {
  res.json({ message: 'POST task funcionando ✅' })
})

router.put('/:id', (req, res) => {
  res.json({ message: `PUT task ${req.params.id} funcionando ✅` })
})

router.delete('/:id', (req, res) => {
  res.json({ message: `DELETE task ${req.params.id} funcionando ✅` })
})

export default router