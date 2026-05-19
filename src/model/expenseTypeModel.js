const { Schema, model } = require('mongoose')

const schemaExpenseType = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const expenseTypeModel = model("ExpenseType", schemaExpenseType)

module.exports = { expenseTypeModel }
