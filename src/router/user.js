const { Router } = require('express')
const { registerUser } = require('../controller/user/registerUser')
const { loginUser } = require('../controller/user/loginUser')
const { getUser } = require('../controller/user/getUser')

const userRouter = Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/:id", getUser)

module.exports = userRouter
