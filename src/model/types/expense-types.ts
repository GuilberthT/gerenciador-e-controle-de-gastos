import { Document, Schema } from "mongoose";

export interface IExpense extends Document {
    description: string;
    value: number;
    expenseType: Schema.Types.ObjectId;
    date: string | Date;
    createAt: Date;
    updateAt: Date;
}