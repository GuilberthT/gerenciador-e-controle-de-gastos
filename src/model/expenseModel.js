import { Schema, model } from 'mongoose'

const schemaExpense = new Schema({
    description: String,
    value: Number,
    createAt: Date,
    updateAt: Date
})

export const expenseModel = model('Expense', schemaExpense)