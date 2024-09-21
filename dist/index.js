"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const mongoose_1 = require("mongoose");
const dotenv_1 = require("dotenv");
const index_1 = require("./router/index");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
(0, dotenv_1.config)();
app.use((0, express_2.json)());
app.use((0, cors_1.default)());
(0, index_1.setRouter)(app);
async function main() {
    try {
        if (!process.env.ACCESS_DB) {
            return;
        }
        await (0, mongoose_1.connect)(process.env.ACCESS_DB);
    }
    catch (error) {
        console.log(error);
    }
}
main();
app.get('/', (req, res) => {
    res.json('Bem vindo ao Typescript');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
