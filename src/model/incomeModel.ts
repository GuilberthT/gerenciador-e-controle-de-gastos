import { Schema, model, Document } from "mongoose";


interface IIncome extends Document {
    description: string;
    value: number;
    incomeType: Schema.Types.ObjectId;
    date: string;
    createdAt: Date;
    updatedAt: Date;
}

const incomeSchema = new Schema<IIncome>({
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

export default model<IIncome>("Income", incomeSchema);
