import { Request, Response } from "express";
import { deleteExpenseById } from "../../service/expenseService";

export async function deleteExpenses(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
        await deleteExpenseById(id);
        res.status(200).json({ message: 'Despesa excluída com sucesso.' });
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
}
