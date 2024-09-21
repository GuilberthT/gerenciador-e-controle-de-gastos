"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findIncomes = findIncomes;
const incomeService_1 = require("../../service/incomeService");
async function findIncomes(req, res) {
    try {
        const incomes = await (0, incomeService_1.getIncome)();
        res.status(200).json(incomes);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
