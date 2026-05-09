import express from 'express'
import cors from 'cors'
import tasksRouter from './routes/tasks.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/tasks', tasksRouter)

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando ✅' })
})

export default app