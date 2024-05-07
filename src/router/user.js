import express from 'express';
import { registerUser } from '../controller/user/registerUser.js';
import { loginUser } from '../controller/user/loginUser.js';
import { getUser } from '../controller/user/getUser.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);

export default router;
