"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenses = deleteExpenses;
const expenseService_1 = require("../../service/expenseService");
async function deleteExpenses(req, res) {
    const { id } = req.params;
    try {
        await (0, expenseService_1.deleteExpenseById)(id);
        res.status(200).json({ message: 'Despesa excluída com sucesso.' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
