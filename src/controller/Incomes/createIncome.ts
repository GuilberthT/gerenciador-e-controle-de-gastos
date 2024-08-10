import { Request, Response } from "express";
import { newIncome } from "../../service/incomeService.js"
import { IIncome } from "../../model/types/incomeTypes.js";

export async function createIncome(req: Request<{}, {}, IIncome>, res: Response) {
    const income = {
        ...req.body,
        createdAt: new Date()
    }

    try {
        const responseIncome = await newIncome(income);

        res.status(201).json(responseIncome);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}