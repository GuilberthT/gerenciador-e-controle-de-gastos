import { Schema, model, Document } from 'mongoose';

interface IIncomeType extends Document {
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const incomeTypeSchema = new Schema < IIncomeType > ({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const incomeTypeModel = model < IIncomeType > ("IncomeType", incomeTypeSchema);