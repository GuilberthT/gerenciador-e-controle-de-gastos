"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalIncome = getTotalIncome;
const incomeService_1 = require("../../service/incomeService");
async function getTotalIncome(req, res) {
    const { month } = req.params;
    try {
        const total = await (0, incomeService_1.getTotalIncomes)(parseInt(month, 10)); // Conversão para number
        res.status(200).json({ total });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
