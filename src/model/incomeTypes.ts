import { Schema } from "mongoose"

export interface IIncome {
    paymentDate(paymentDate: any): unknown
    description: string
    value: number
    incomeType: Schema.Types.ObjectId
    date: string
    createdAt?: Date
    updatedAt?: Date
}

