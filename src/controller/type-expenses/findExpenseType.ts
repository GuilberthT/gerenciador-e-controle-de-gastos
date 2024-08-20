import { Request, Response } from "express";
import { findExpenseTypes } from "../../service/expenseTypeService";

export async function find_expense_types_controller(req: Request, res: Response): Promise<void> {
    try {
        await findExpenseTypes(req, res);
    } catch (error: any) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}