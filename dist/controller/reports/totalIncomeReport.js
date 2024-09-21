"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportTotalIncomes = reportTotalIncomes;
const incomeService_1 = require("../../service/incomeService");
const dateFormat_1 = require("../../utils/dateFormat");
async function reportTotalIncomes(req, res) {
    const month = req.query.month;
    const incomes = await (0, incomeService_1.getIncome)();
    const filterIncomesByMonth = filterByMonth(incomes, month);
    const totalIncomes = sumIncomeValue(filterIncomesByMonth);
    res.status(200).json({ total: totalIncomes });
}
function sumIncomeValue(incomes) {
    let incomeValue = 0;
    incomes.forEach((income) => {
        incomeValue += income.value;
    });
    return incomeValue;
}
function filterByMonth(incomes, month) {
    return incomes.filter((item) => (0, dateFormat_1.formatMonth)(item.date) === Number(month));
}
