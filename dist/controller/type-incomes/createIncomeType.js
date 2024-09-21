"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_income_type_controller = create_income_type_controller;
const incomeTypeService_1 = require("../../service/incomeTypeService");
async function create_income_type_controller(req, res) {
    try {
        await validates(req.body);
        await (0, incomeTypeService_1.newCreateIncomeType)(req, res);
    }
    catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
async function validates(body) {
    validateRequiredDescription(body.description);
}
function validateRequiredDescription(description) {
    if (!description) {
        throw new Error("A descrição é obrigatória!");
    }
}
