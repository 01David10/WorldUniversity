import { sequelize } from '../database/connection.js'
import { Enroll } from './enroll.model.js'
import { Course } from './course.model.js'
import { DataTypes } from 'sequelize'

export const EnrollCourse = sequelize.define('EnrollCourse', {

  aprroved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

Course.belongsToMany(Enroll, {
  through: EnrollCourse
})
Enroll.belongsToMany(Course, {
  through: EnrollCourse
})
