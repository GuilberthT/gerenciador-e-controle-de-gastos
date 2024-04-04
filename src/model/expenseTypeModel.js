import { Schema, model } from 'mongoose'

const schemaExpenseType = new Schema({
    title: String,
    createdAt: Date,
    updatedAt: Date
})

export const expenseTypeModel = model("ExpenseType", schemaExpenseType)