"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpense = createExpense;
const expenseTypeService_1 = require("../../service/expenseTypeService");
const expenseService_1 = require("../../service/expenseService");
async function createExpense(req, res) {
    try {
        await validates(req.body);
        const expense = {
            ...req.body,
            createAt: new Date(),
            date: new Date(req.body.date)
        };
        const myExpense = await (0, expenseService_1.newExpense)(expense);
        res.status(200).json(myExpense);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
}
async function validates(body) {
    validateRequiredDescription(body.description);
    validateRequiredValue(body.value);
    await validateRequiredExpenseType(body.expenseType);
    validateRequiredPaymentDate(body.date);
}
function validateRequiredDescription(description) {
    if (!description) {
        throw new Error("A descrição é obrigatória!");
    }
}
function validateRequiredValue(value) {
    if (!value) {
        throw new Error("O valor é obrigatório!");
    }
}
async function validateRequiredExpenseType(idExpenseType) {
    if (!idExpenseType) {
        throw new Error("O tipo de despesa é obrigatório!");
    }
    const expenseType = await (0, expenseTypeService_1.getExpensesById)(idExpenseType);
    if (!expenseType) {
        throw new Error("Tipo de despesa não encontrado!");
    }
}
function validateRequiredPaymentDate(paymentDate) {
    if (!paymentDate) {
        throw new Error("A data de pagamento é obrigatória!");
    }
}
