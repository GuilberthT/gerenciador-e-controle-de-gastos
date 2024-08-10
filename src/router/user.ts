import { Router } from 'express'
import { registerUser } from '../controller/user/registerUser';
import { loginUser } from '../controller/user/loginUser';
import { getUser } from '../controller/user/getUser';

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUser);

export default userRouter;

