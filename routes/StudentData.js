const express = require('express')
const studentRouter = express.Router()
const controllers = require('../Controllers/StudentController')

studentRouter.get('/:studentId',controllers.sendStudentDetails)

studentRouter.post('/register',controllers.addStudentDetails)

studentRouter.put('/update/:studentId',controllers.updateStudentDetails)

studentRouter.delete('/delete/:studentId',controllers.deleteStudentDetails)





module.exports = studentRouter 
