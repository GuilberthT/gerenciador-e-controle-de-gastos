"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportTotalExpenses = reportTotalExpenses;
const expenseService_js_1 = require("../../service/expenseService.js");
const dateFormat_js_1 = require("../../utils/dateFormat.js");
async function reportTotalExpenses(req, res) {
    const month = Number(req.query.month);
    const expenses = await (0, expenseService_js_1.getExpenses)();
    const filterExpensesByMonth = filterByMonth(expenses, month);
    const totalExpenses = sumExpenseValue(filterExpensesByMonth);
    res.status(200).json({ total: totalExpenses });
}
function sumExpenseValue(expenses) {
    let expenseValue = 0;
    expenses.forEach((expense) => {
        expenseValue += expense.value;
    });
    return expenseValue;
}
function filterByMonth(expenses, month) {
    return expenses.filter((item) => (0, dateFormat_js_1.formatMonth)(item.date) === month);
}
