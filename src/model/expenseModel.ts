import { Schema, model } from 'mongoose';
import { IExpense } from './types/expense-types';

const schemaExpense = new Schema<IExpense>({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    expenseType: {
        type: Schema.Types.ObjectId,
        ref: 'ExpenseType',
        required: true
    },
    date: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

export const expenseModel = model<IExpense>('Expense', schemaExpense);
