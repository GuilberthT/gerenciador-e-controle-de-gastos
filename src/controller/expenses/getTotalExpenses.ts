import { Request, Response } from "express";
import { getTotalExpenses } from '../../service/expenseService';

export async function getTotalExpense(req: Request<{ month: string }>, res: Response): Promise<void> {
    const { month } = req.params;

    try {
        const total = await getTotalExpenses(parseInt(month, 10)); 
        res.status(200).json({ total });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}