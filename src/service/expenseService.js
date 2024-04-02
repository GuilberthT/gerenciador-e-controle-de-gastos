import { expenseModel } from "../model/expenseModel.js";

export async function newExpense(data) {
    try {
        const expense = await expenseModel.create(data)

        return expense
    } catch (error) {
        throw new Error(error)
    }
}

export async function getExpenses() {
    try {
        const expenses = await expenseModel.find()

        return expenses
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateExpenseById(id, newData) {
    try {
        const updatedExpense = await expenseModel.findByIdAndUpdate(id, newData, { new: true })
        if (!updatedExpense) {
            throw new Error("Despesa não encontrada.");
        }
        return updatedExpense;
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteExpenseById(id) {
    try {
        const deletedExpense = await expenseModel.findByIdAndDelete(id)
        if (!deletedExpense) {
            throw new Error("Despesa não encontrada.")
        }
    } catch (error) {
        throw new Error(error);
    }
}

export async function getExpenseById(id) {
    try {
        const expense = await expenseModel.findById(id)
        if (!expense) {
            throw new Error("Despesa não encontrada.")
        }
        return expense;
    } catch (error) {
        throw new Error(error)
    }
}