import { Schema, model, Document } from 'mongoose';

export interface IExpense extends Document {
    description: string;
    value: number;
    expenseType: Schema.Types.ObjectId;
    date: string;
    createAt: Date;
    updateAt: Date;
}

const schemaExpense = new Schema < IExpense > ({
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

export const expenseModel = model < IExpense > ('Expense', schemaExpense);
