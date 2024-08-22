import { Request, Response } from "express";
import { getTotalIncomes } from '../../service/incomeService';

export async function getTotalIncome(req: Request<{ month: string }>, res: Response): Promise<void> {
    const { month } = req.params;

    try {
        const total = await getTotalIncomes(parseInt(month, 10)); // Conversão para number
        res.status(200).json({ total });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}