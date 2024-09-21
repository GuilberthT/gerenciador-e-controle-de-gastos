"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_income_types_controller = find_income_types_controller;
const incomeTypeService_1 = require("../../service/incomeTypeService");
async function find_income_types_controller(req, res) {
    try {
        await (0, incomeTypeService_1.findIncomeTypes)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
