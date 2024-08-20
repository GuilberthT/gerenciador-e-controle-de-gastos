import { Request, Response } from "express";
import { findIncomeTypes } from "../../service/incomeTypeService";

export async function find_income_types_controller(req: Request, res: Response): Promise<void> {
    try {
        await findIncomeTypes(req, res);
    } catch (error: any) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}