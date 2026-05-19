const { expenseModel } = require("../model/expenseModel")

async function newExpense(data) {
    try {
        const { description, value, expenseType, date } = data
        const expense = await expenseModel.create({
            description,
            value,
            expenseType,
            createdAt: new Date(),
            date,
        })
        return expense
    } catch (error) {
        throw new Error(error)
    }
}

async function getExpenses() {
    try {
        const expenses = await expenseModel.find().populate("expenseType")
        return expenses
    } catch (error) {
        throw new Error(error)
    }
}

async function updateExpenseById(id, newData) {
    try {
        const updatedExpense = await expenseModel.findByIdAndUpdate(id, newData, { new: true })
        if (!updatedExpense) {
            throw new Error("Despesa não encontrada.")
        }
        return updatedExpense
    } catch (error) {
        throw new Error(error)
    }
}

async function deleteExpenseById(id) {
    try {
        const deletedExpense = await expenseModel.findByIdAndDelete(id)
        if (!deletedExpense) {
            throw new Error("Despesa não encontrada.")
        }
        return deletedExpense
    } catch (error) {
        throw new Error(error)
    }
}

async function getExpenseById(id) {
    try {
        const expense = await expenseModel.findById(id)
        if (!expense) {
            throw new Error("Despesa não encontrada.")
        }
        return expense
    } catch (error) {
        throw new Error(error)
    }
}

async function getExpensesByMonth(month, year) {
    try {
        const expenses = await expenseModel.find({
            createdAt: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1),
            },
        })
        return expenses
    } catch (error) {
        throw new Error(error)
    }
}

async function getTotalExpenses(month) {
    const startDate = new Date(new Date().getFullYear(), month - 1, 1)
    const endDate = new Date(new Date().getFullYear(), month, 0)

    const totalExpenses = await expenseModel.aggregate([
        { $match: { createdAt: { $gte: startDate, $lt: endDate } } },
        { $group: { _id: null, total: { $sum: "$value" } } },
    ])

    return totalExpenses.length > 0 ? totalExpenses[0].total : 0
}

module.exports = {
    newExpense,
    getExpenses,
    updateExpenseById,
    deleteExpenseById,
    getExpenseById,
    getExpensesByMonth,
    getTotalExpenses,
}
