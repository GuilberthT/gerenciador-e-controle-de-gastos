"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_expense_type_controller = update_expense_type_controller;
const expenseTypeService_1 = require("../../service/expenseTypeService");
async function update_expense_type_controller(req, res) {
    try {
        await validates(req.body);
        await (0, expenseTypeService_1.updateExpenseType)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
async function validates(body) {
    validateRequiredDescription(body.description);
}
function validateRequiredDescription(description) {
    if (!description) {
        throw new Error("A descrição é obrigatória!");
    }
}
