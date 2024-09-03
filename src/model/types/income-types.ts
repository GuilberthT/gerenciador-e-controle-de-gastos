import { Document, Schema } from "mongoose";

export interface IIncome extends Document {
    description: string;
    value: number;
    incomeType: Schema.Types.ObjectId;
    date: string;
    createdAt: Date;
    updatedAt: Date;
}
