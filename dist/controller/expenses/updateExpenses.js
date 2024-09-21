"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenses = updateExpenses;
const expenseService_1 = require("../../service/expenseService");
async function updateExpenses(req, res) {
    const { id } = req.params;
    const { description, value } = req.body;
    if (!description || !value) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios" });
    }
    const updatedExpenseData = {
        ...req.body,
        description,
        value,
        createAt: new Date(),
    };
    try {
        const updatedExpense = await (0, expenseService_1.updateExpenseById)(id, updatedExpenseData);
        res.status(200).json(updatedExpense);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
