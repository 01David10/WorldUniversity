import express from 'express'
import cors from 'cors'

import { studentRouters } from './routes/student.routes.js'
import { teacherRouters } from './routes/teacher.routes.js'
import { staffRouters } from './routes/staff.routes.js'
import { assignmentRouters } from './routes/assignment.routes.js'
import { courseRouters } from './routes/course.routes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.use(studentRouters)
app.use(teacherRouters)
app.use(staffRouters)
app.use(assignmentRouters)
app.use(courseRouters)
