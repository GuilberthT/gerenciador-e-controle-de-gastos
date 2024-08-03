import { Schema, model } from "mongoose";

const incomeSchema = new Schema({
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

export default model("Income", incomeSchema);
