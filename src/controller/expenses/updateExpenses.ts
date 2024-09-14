import { Request, Response } from "express";
import { updateExpenseById } from "../../service/expenseService";

export async function updateExpenses(req: Request, res: Response) {
    const { id } = req.params;
    const { description, value } = req.body;

    if (!description || !value) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios" });
    }

    const updatedExpenseData = {
        ...req.body,
        description,
        value,
        createAt: new Date(),
    };

    try {
        const updatedExpense = await updateExpenseById(id, updatedExpenseData);
        res.status(200).json(updatedExpense);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
}
