import { Request, Response } from "express";
import { getExpenses } from "../../service/expenseService";

export async function findExpenses(req: Request, res: Response): Promise<void> {
    try {
        const expenses = await getExpenses();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
}
