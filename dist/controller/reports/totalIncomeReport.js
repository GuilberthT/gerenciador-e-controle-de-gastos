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
exports.reportTotalIncomes = reportTotalIncomes;
const incomeService_1 = require("../../service/incomeService");
const dateFormat_1 = require("../../utils/dateFormat");
function reportTotalIncomes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const month = req.query.month;
        const incomes = yield (0, incomeService_1.getIncome)();
        const filterIncomesByMonth = filterByMonth(incomes, month);
        const totalIncomes = sumIncomeValue(filterIncomesByMonth);
        res.status(200).json({ total: totalIncomes });
    });
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
//# sourceMappingURL=totalIncomeReport.js.map