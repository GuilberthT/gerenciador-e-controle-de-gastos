import { Router } from 'express'
import { registerUser } from '../controller/user/registerUser.js';
import { loginUser } from '../controller/user/loginUser.js';
import { getUser } from '../controller/user/getUser.js';

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);

export default userRouter;

