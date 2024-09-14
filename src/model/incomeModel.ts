import { Schema, model } from "mongoose";
import { IIncome } from "./types/income-types";

export interface IIncomeDocument extends IIncome, Document {}

const incomeSchema = new Schema<IIncomeDocument>({
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
});

export default model<IIncomeDocument>("Income", incomeSchema);
