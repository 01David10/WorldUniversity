import express from 'express'
import cors from 'cors'

import { studentRouters } from './routes/student.routes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.use(studentRouters)
