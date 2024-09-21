"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../../model/User"));
const registerUser = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (!name || !email || !password || !confirmpassword) {
            return res.status(422).json({ msg: "Por favor, preencha todos os campos!" });
        }
        if (password !== confirmpassword) {
            return res.status(422).json({ msg: "As senhas não conferem!" });
        }
        const userExists = await User_1.default.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ msg: "Por favor, utilize outro e-mail." });
        }
        const salt = await bcrypt_1.default.genSalt(12);
        const passwordHash = await bcrypt_1.default.hash(password, salt);
        const newUser = new User_1.default({ name, email, password: passwordHash });
        await newUser.save();
        res.status(201).json({ msg: "Usuário registrado com sucesso!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao registrar o usuário." });
    }
};
exports.registerUser = registerUser;
