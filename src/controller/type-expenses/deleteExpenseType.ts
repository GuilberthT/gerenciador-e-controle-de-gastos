import { Request, Response } from "express";
import { deleteExpenseType } from "../../service/expenseTypeService";

export async function delete_expense_type_controller(req: Request, res: Response): Promise<void> {
    try {
        await deleteExpenseType(req, res);
    } catch (error: any) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}