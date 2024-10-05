import { Schema, model } from 'mongoose';
import { IExpense } from './types/expense-types';

export interface IExpenseDocument extends IExpense, Document {}

const schemaExpense = new Schema<IExpenseDocument>({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseType',
        required: true
    },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const expenseModel = model<IExpenseDocument>('Expense', schemaExpense);
