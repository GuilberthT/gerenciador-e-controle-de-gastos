import { Request, Response } from "express";
import { deleteIncomeById } from "../../service/incomeService";

export async function deleteIncome(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;

    try {
        await deleteIncomeById(id)
        res.status(200).json({ message: "Renda excluída com sucesso." })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}