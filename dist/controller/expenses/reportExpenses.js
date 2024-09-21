"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExpenseReport = generateExpenseReport;
const expenseService_1 = require("../../service/expenseService");
async function generateExpenseReport(req, res) {
    const { month, year } = req.body;
    try {
        const expenses = await (0, expenseService_1.getExpensesByMonth)(month, year);
        res.status(200).json(expenses);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
