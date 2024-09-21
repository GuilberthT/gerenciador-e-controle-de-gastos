"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseType = createExpenseType;
exports.findExpenseTypes = findExpenseTypes;
exports.updateExpenseType = updateExpenseType;
exports.deleteExpenseType = deleteExpenseType;
exports.getExpensesById = getExpensesById;
const expenseTypeModel_1 = require("../model/expenseTypeModel");
async function createExpenseType(req, res) {
    const { description } = req.body;
    try {
        const newExpenseType = await expenseTypeModel_1.expenseTypeModel.create({ description });
        res.status(201).json(newExpenseType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function findExpenseTypes(req, res) {
    try {
        const expenseTypes = await expenseTypeModel_1.expenseTypeModel.find();
        res.status(200).json(expenseTypes);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function updateExpenseType(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedExpenseType = await expenseTypeModel_1.expenseTypeModel.findByIdAndUpdate(id, { description }, { new: true });
        if (!updatedExpenseType) {
            res.status(404).json({ message: "Tipo de gasto não encontrado" });
            return;
        }
        res.status(200).json(updatedExpenseType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function deleteExpenseType(req, res) {
    const { id } = req.params;
    try {
        const deletedExpenseType = await expenseTypeModel_1.expenseTypeModel.findByIdAndDelete(id);
        if (!deletedExpenseType) {
            res.status(404).json({ message: "Tipo de gasto não encontrado" });
            return;
        }
        res.status(200).json({ message: "Tipo de gasto excluído com sucesso" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function getExpensesById(id) {
    try {
        const expensesType = await expenseTypeModel_1.expenseTypeModel.findById(id);
        return expensesType;
    }
    catch (error) {
        throw new Error(error);
    }
}
