import { Schema, model } from 'mongoose';

const incomeTypeSchema = new Schema({
    description: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const incomeTypeModel = model("IncomeType", incomeTypeSchema);
