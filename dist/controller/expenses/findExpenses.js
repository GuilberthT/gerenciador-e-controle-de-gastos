"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findExpenses = findExpenses;
const expenseService_1 = require("../../service/expenseService");
async function findExpenses(req, res) {
    try {
        const expenses = await (0, expenseService_1.getExpenses)();
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
