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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!process.env.ACCESS_DB) {
                return;
            }
            yield (0, mongoose_1.connect)(process.env.ACCESS_DB);
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
app.get('/', (req, res) => {
    res.json('Bem vindo ao Typescript');
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map