"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRouter = setRouter;
const express_1 = require("express");
const expenses_1 = __importDefault(require("./expenses"));
const incomes_1 = __importDefault(require("./incomes"));
const expenseTypeRoutes_1 = __importDefault(require("./expenseTypeRoutes"));
const incomeTypeRoutes_1 = __importDefault(require("./incomeTypeRoutes"));
const user_1 = __importDefault(require("./user"));
const reports_1 = __importDefault(require("./reports"));
const router = (0, express_1.Router)();
function setRouter(app) {
    app.use('/expenses', expenses_1.default);
    app.use('/incomes', incomes_1.default);
    app.use('/expenseTypes', expenseTypeRoutes_1.default);
    app.use('/incomeTypes', incomeTypeRoutes_1.default);
    app.use('/user', user_1.default);
    app.use('/reports', reports_1.default);
}
exports.default = router;
