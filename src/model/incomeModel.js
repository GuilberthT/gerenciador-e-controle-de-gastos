import { Schema, model } from "mongoose";

const incomeSchema = new Schema({
    description: String,
    value: Number,
    createdAt: Date,
    updateAt: Date
})

export const incomeModel = model("Income", incomeSchema)