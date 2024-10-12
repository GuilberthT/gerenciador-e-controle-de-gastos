"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerUser_1 = require("../controller/user/registerUser");
const loginUser_1 = require("../controller/user/loginUser");
const getUser_1 = require("../controller/user/getUser");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", registerUser_1.registerUser);
userRouter.post("/login", loginUser_1.loginUser);
userRouter.get("/:id", getUser_1.getUser);
exports.default = userRouter;
//# sourceMappingURL=user.js.map