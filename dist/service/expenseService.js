"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newExpense = newExpense;
exports.getExpenses = getExpenses;
exports.updateExpenseById = updateExpenseById;
exports.deleteExpenseById = deleteExpenseById;
exports.getExpenseById = getExpenseById;
exports.getExpensesByMonth = getExpensesByMonth;
const expenseModel_1 = require("../model/expenseModel");
async function newExpense(data) {
    try {
        const { description, value, expenseType, date } = data;
        const expense = await expenseModel_1.expenseModel.create({
            description,
            value,
            expenseType,
            createdAt: new Date(),
            date,
        });
        return expense;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getExpenses() {
    try {
        const expenses = await expenseModel_1.expenseModel.find().populate("expenseType");
        return expenses;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function updateExpenseById(id, newData) {
    try {
        const updatedExpense = await expenseModel_1.expenseModel.findByIdAndUpdate(id, newData, {
            new: true,
        });
        if (!updatedExpense) {
            throw new Error("Despesa não encontrada.");
        }
        return updatedExpense;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function deleteExpenseById(id) {
    try {
        const deletedExpense = await expenseModel_1.expenseModel.findByIdAndDelete(id);
        if (!deletedExpense) {
            throw new Error("Despesa não encontrada.");
        }
        return deletedExpense;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getExpenseById(id) {
    try {
        const expense = await expenseModel_1.expenseModel.findById(id);
        if (!expense) {
            throw new Error("Despesa não encontrada.");
        }
        return expense;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getExpensesByMonth(month, year) {
    try {
        const expenses = await expenseModel_1.expenseModel.find({
            createdAt: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1),
            },
        });
        return expenses;
    }
    catch (error) {
        throw new Error(error);
    }
}
