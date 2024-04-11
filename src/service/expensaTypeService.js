import { expenseTypeModel } from "../model/expenseTypeModel.js"

export async function getExpensesById(id) {
    try {
        const expensesType = await expenseTypeModel.findById(id)
    
        return expensesType
    } catch (error) {
        throw new Error(error)
    }
}