const { Schema, model } = require('mongoose')

const incomeTypeSchema = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const incomeTypeModel = model("IncomeType", incomeTypeSchema)

module.exports = { incomeTypeModel }
