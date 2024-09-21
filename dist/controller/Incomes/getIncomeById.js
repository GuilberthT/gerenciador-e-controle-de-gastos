"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomeById = getIncomeById;
const incomeService_1 = require("../../service/incomeService");
async function getIncomeById(req, res) {
    const { id } = req.params;
    try {
        const income = await (0, incomeService_1.getById)(id);
        res.status(200).json(income);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
