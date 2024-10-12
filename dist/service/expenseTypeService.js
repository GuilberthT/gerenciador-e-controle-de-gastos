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
exports.createExpenseType = createExpenseType;
exports.findExpenseTypes = findExpenseTypes;
exports.updateExpenseType = updateExpenseType;
exports.deleteExpenseType = deleteExpenseType;
exports.getExpensesById = getExpensesById;
const expenseTypeModel_1 = require("../model/expenseTypeModel");
function createExpenseType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { description } = req.body;
        try {
            const newExpenseType = yield expenseTypeModel_1.expenseTypeModel.create({ description });
            res.status(201).json(newExpenseType);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function findExpenseTypes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expenseTypes = yield expenseTypeModel_1.expenseTypeModel.find();
            res.status(200).json(expenseTypes);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function updateExpenseType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { description } = req.body;
        try {
            const updatedExpenseType = yield expenseTypeModel_1.expenseTypeModel.findByIdAndUpdate(id, { description }, { new: true });
            if (!updatedExpenseType) {
                res.status(404).json({ message: "Tipo de gasto não encontrado" });
                return;
            }
            res.status(200).json(updatedExpenseType);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function deleteExpenseType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const deletedExpenseType = yield expenseTypeModel_1.expenseTypeModel.findByIdAndDelete(id);
            if (!deletedExpenseType) {
                res.status(404).json({ message: "Tipo de gasto não encontrado" });
                return;
            }
            res.status(200).json({ message: "Tipo de gasto excluído com sucesso" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function getExpensesById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expensesType = yield expenseTypeModel_1.expenseTypeModel.findById(id);
            return expensesType;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
//# sourceMappingURL=expenseTypeService.js.map