"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_expense_types_controller = find_expense_types_controller;
const expenseTypeService_1 = require("../../service/expenseTypeService");
async function find_expense_types_controller(req, res) {
    try {
        await (0, expenseTypeService_1.findExpenseTypes)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
