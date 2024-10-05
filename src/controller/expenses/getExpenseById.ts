import { Request, Response } from "express";
import { getExpenseById as getExpenseByIdService } from "../../service/expenseService";

export async function getExpenseById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
        const expense = await getExpenseByIdService(id);
        
        res.status(200).json(expense);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
}
