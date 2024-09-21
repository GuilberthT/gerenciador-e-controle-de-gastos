"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.status(403).json("Acesso não autorizado");
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(403).json("Acesso não autorizado");
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        if (!decoded) {
            return res.status(403).json("Acesso não autorizado");
        }
        next();
    }
    catch (error) {
        return res.status(400).json("Token inválido");
    }
};
exports.auth = auth;
