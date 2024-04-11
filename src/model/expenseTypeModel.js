import { Schema, model } from 'mongoose'

const schemaExpenseType = new Schema({
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const expenseTypeModel = model("ExpenseType", schemaExpenseType);