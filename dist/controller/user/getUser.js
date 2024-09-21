"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const User_1 = __importDefault(require("../../model/User"));
const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User_1.default.findById(id, '-password');
        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao obter informações do usuário." });
    }
};
exports.getUser = getUser;
