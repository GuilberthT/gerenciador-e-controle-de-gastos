import { Request, Response } from "express";
import { deleteIncomeType } from "../../service/incomeTypeService";

export async function delete_income_type_controller(req: Request, res: Response): Promise<void> {
    try {
        await deleteIncomeType(req, res);
    } catch (error: any) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}