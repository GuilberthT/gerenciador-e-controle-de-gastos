"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncome = deleteIncome;
const incomeService_1 = require("../../service/incomeService");
async function deleteIncome(req, res) {
    const { id } = req.params;
    try {
        await (0, incomeService_1.deleteIncomeById)(id);
        res.status(200).json({ message: "Renda excluída com sucesso." });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
