"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../../model/User"));
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const user = yield User_1.default.findOne({ email: body.email });
        const secret = process.env.SECRET;
        if (!secret) {
            return res.status(404).json({ msg: "Secret não definida, vá ao seu .env!" });
        }
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }
        const checkPassword = yield bcrypt_1.default.compare(body.password, user.password);
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
});
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.js.map