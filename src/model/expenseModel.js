import { Schema, model } from 'mongoose'

const schemaExpense = new Schema({
    description: String,
    value: Number,
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseType'
    },
    paymentDate: String,
    createAt: Date,
    updateAt: Date
})

export const expenseModel = model('Expense', schemaExpense)