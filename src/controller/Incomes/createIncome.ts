import { Request, Response } from "express";
import { newIncome } from "../../service/incomeService";
import { IIncome } from "../../model/types/incomeTypes";

export async function createIncome(req: Request<{}, {}, IIncome>, res: Response): Promise<void> {
    const income = {
        ...req.body,
        createdAt: new Date(),
    };

    try {
        const responseIncome = await newIncome(income);
        res.status(201).json(responseIncome);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}