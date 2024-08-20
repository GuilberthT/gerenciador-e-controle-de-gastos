import { Request, Response } from "express";
import { getIncomesByMonth } from "../../service/incomeService";

export async function generateIncomeReport(req: Request<{}, {}, { month: string, year: string }>, res: Response): Promise<void> {
    const { month, year } = req.body;

    try {
        const incomes = await getIncomesByMonth(month, year);
        res.status(200).json(incomes);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}