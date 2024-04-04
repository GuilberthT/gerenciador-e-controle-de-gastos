import { Schema, model } from 'mongoose'

const schemaExpense = new Schema({
    description: String,
    value: Number,
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseType'
    },
    createAt: Date,
    updateAt: Date
})

export const expenseModel = model('Expense', schemaExpense)