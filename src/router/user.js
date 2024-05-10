import express from 'express';
import { registerUser } from '../controller/user/registerUser.js';
import { loginUser } from '../controller/user/loginUser.js';
import { getUser } from '../controller/user/getUser.js';
import validateId from '../middleware/validateId.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", validateId, getUser);

export default router;

