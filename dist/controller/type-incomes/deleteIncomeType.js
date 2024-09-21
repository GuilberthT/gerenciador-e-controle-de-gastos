"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_income_type_controller = delete_income_type_controller;
const incomeTypeService_1 = require("../../service/incomeTypeService");
async function delete_income_type_controller(req, res) {
    try {
        await (0, incomeTypeService_1.deleteIncomeType)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
