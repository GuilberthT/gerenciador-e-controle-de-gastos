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