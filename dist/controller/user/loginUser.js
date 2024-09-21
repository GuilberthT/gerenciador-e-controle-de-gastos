"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../../model/User"));
const loginUser = async (req, res) => {
    try {
        const body = req.body;
        const user = await User_1.default.findOne({ email: body.email });
        const secret = process.env.SECRET;
        if (!secret) {
            return res.status(404).json({ msg: "Secret não definida, vá ao seu .env!" });
        }
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }
        const checkPassword = await bcrypt_1.default.compare(body.password, user.password);
        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha inválida!" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, secret);
        res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao fazer login do usuário." });
    }
};
exports.loginUser = loginUser;
