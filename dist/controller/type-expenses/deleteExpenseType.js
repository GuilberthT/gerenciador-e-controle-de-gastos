"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_expense_type_controller = delete_expense_type_controller;
const expenseTypeService_1 = require("../../service/expenseTypeService");
async function delete_expense_type_controller(req, res) {
    try {
        await (0, expenseTypeService_1.deleteExpenseType)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
