const { Schema, model } = require('mongoose')

const schemaExpense = new Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseType',
        required: true
    },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const expenseModel = model('Expense', schemaExpense)

module.exports = { expenseModel }
