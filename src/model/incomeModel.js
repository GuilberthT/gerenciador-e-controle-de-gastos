import { Schema, model } from "mongoose";

const incomeSchema = new Schema({
    description: String,
    value: Number,
    incomeType: {
        type: Schema.Types.ObjectId,
        ref: 'IncomeType'
    },
    createdAt: Date,
    updateAt: Date
})

export const incomeModel = model("Income", incomeSchema)