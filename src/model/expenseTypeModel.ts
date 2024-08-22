import { Schema, model, Document } from 'mongoose';

interface IExpenseType extends Document {
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const schemaExpenseType = new Schema<IExpenseType>({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const expenseTypeModel = model<IExpenseType>("ExpenseType", schemaExpenseType);
