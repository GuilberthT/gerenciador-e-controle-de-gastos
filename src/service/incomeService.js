import { incomeModel } from "../model/incomeModel.js"

export async function newIncome(data) {
    try {
        const { description, value, incomeType, receiptDate } = data
        const income = await incomeModel.create({ description, value, incomeType, createdAt: new Date(), receiptDate })

        return income
    } catch (error) {
        throw new Error(error)
    }
}

export async function getIncome() {
    try {
        const income = await incomeModel.find().populate("incomeType")

        return income
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateIncomeById(id, newData) {
    try {
        const updatedIncome = await incomeModel.findByIdAndUpdate(id, newData, { new: true })
        if (!updatedIncome) {
            throw new Error("Renda não encontrada");
        }
        return updatedIncome
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteIncomeById(id) {
    try {
        const deletedIncome = await incomeModel.findByIdAndDelete(id)
        if (!deletedIncome) {
            throw new Error("Renda não encontrada");
        }

        return deletedIncome
    } catch (error) {
        throw new Error(error)
    }
}

export async function getById(id) {
    try {
        const income = await incomeModel.findById(id)
        if (!income) {
            throw new Error("Renda não encontrada");
        }

        return income
    } catch (error) {
        throw new Error(error)
    }
}

export async function getIncomesByMonth(month, year) {
    try {
        const incomes = await incomeModel.find({
            createdAt: {
                $gte: new Date(year, month - 1, 1), 
                $lt: new Date(year, month, 1) 
            }
        });

        return incomes;
    } catch (error) {
        throw new Error(error);
    }
}