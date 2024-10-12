"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportTotalExpenses = reportTotalExpenses;
const expenseService_js_1 = require("../../service/expenseService.js");
const dateFormat_js_1 = require("../../utils/dateFormat.js");
function reportTotalExpenses(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const month = Number(req.query.month);
        const expenses = yield (0, expenseService_js_1.getExpenses)();
        const filterExpensesByMonth = filterByMonth(expenses, month);
        const totalExpenses = sumExpenseValue(filterExpensesByMonth);
        res.status(200).json({ total: totalExpenses });
    });
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
//# sourceMappingURL=totalExpenseReport.js.map