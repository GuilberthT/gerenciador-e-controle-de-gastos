import { Request, Response } from "express";
import { getIncome } from "../../service/incomeService";

export async function findIncomes(req: Request, res: Response): Promise<void> {
    try {
        const incomes = await getIncome();
        res.status(200).json(incomes);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}