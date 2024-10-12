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
exports.createExpense = createExpense;
const expenseTypeService_1 = require("../../service/expenseTypeService");
const expenseService_1 = require("../../service/expenseService");
function createExpense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield validates(req.body);
            const expense = Object.assign(Object.assign({}, req.body), { createAt: new Date(), date: new Date(req.body.date) });
            const myExpense = yield (0, expenseService_1.newExpense)(expense);
            res.status(200).json(myExpense);
        }
        catch (error) {
            res.status(400).json(error.message);
        }
    });
}
function validates(body) {
    return __awaiter(this, void 0, void 0, function* () {
        validateRequiredDescription(body.description);
        validateRequiredValue(body.value);
        yield validateRequiredExpenseType(body.expenseType);
        validateRequiredPaymentDate(body.date);
    });
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
function validateRequiredExpenseType(idExpenseType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!idExpenseType) {
            throw new Error("O tipo de despesa é obrigatório!");
        }
        const expenseType = yield (0, expenseTypeService_1.getExpensesById)(idExpenseType);
        if (!expenseType) {
            throw new Error("Tipo de despesa não encontrado!");
        }
    });
}
function validateRequiredPaymentDate(paymentDate) {
    if (!paymentDate) {
        throw new Error("A data de pagamento é obrigatória!");
    }
}
//# sourceMappingURL=createExpense.js.map