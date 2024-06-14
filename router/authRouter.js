const express = require('express')
const authController = require('../controller/authController')
const authRouter = express.Router()

authRouter.post('/signup',(authController.SignUp))
.post('/login',(authController.Login))


module.exports = authRouter