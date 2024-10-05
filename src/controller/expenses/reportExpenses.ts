import { Request, Response } from "express";
import { getExpensesByMonth } from "../../service/expenseService";

export async function generateExpenseReport(req: Request, res: Response): Promise<void> {
    const { month, year } = req.body;

    try {
        const expenses = await getExpensesByMonth(month, year);
        
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
}