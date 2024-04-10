import { Schema, model } from 'mongoose'

const schemaExpenseType = new Schema({
    description: String,
    value: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const expenseType = model("ExpenseType", schemaExpenseType)