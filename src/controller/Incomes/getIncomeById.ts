import { Request, Response } from "express";
import { getById } from "../../service/incomeService";

export async function getIncomeById(req: Request<{ id: string }>, res: Response): Promise<void> {
    const { id } = req.params;

    try {
        const income = await getById(id);
        res.status(200).json(income);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}