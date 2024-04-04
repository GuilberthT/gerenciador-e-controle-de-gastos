import { incomeModel } from "../model/incomeModel.js"

export async function newIncome(data) {
    try {
        const income = await incomeModel.create(data)

        return income
    } catch (error) {
        throw new Error(error)
    }
}

export async function getIncome() {
    try {
        const income = await incomeModel.find()

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