const { Schema, model } = require("mongoose")

const incomeSchema = new Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    incomeType: {
        type: Schema.Types.ObjectId,
        ref: "IncomeType",
        required: true
    },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = model("Income", incomeSchema)
