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
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../../model/User"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, confirmpassword } = req.body;
        if (!name || !email || !password || !confirmpassword) {
            return res.status(422).json({ msg: "Por favor, preencha todos os campos!" });
        }
        if (password !== confirmpassword) {
            return res.status(422).json({ msg: "As senhas não conferem!" });
        }
        const userExists = yield User_1.default.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ msg: "Por favor, utilize outro e-mail." });
        }
        const salt = yield bcrypt_1.default.genSalt(12);
        const passwordHash = yield bcrypt_1.default.hash(password, salt);
        const newUser = new User_1.default({ name, email, password: passwordHash });
        yield newUser.save();
        res.status(201).json({ msg: "Usuário registrado com sucesso!" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao registrar o usuário." });
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=registerUser.js.map