"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseById = getExpenseById;
const expenseService_1 = require("../../service/expenseService");
async function getExpenseById(req, res) {
    const { id } = req.params;
    try {
        const expense = await (0, expenseService_1.getExpenseById)(id);
        res.status(200).json(expense);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
