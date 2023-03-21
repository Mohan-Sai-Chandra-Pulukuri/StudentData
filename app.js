const express = require('express')
const bodyParser = require('body-parser')
const application = express()
application.use(bodyParser.json())
const studentRouter = require('./routes/StudentData')
application.use('/student',studentRouter)

application.listen(9000,()=>{console.log("Server is Running on the Port 9000")})
