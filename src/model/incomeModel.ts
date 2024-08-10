import { Schema, model } from "mongoose";
import { IIncome } from "./types/incomeTypes";

const incomeSchema = new Schema<IIncome>({
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  incomeType: {
    type: Schema.Types.ObjectId,
    ref: "IncomeType",
  },
  date: {
    type: String,
    required: true,
  },
  createdAt: Date,
  updatedAt: Date
});

export default model<IIncome>("Income", incomeSchema);
