import { Request, Response } from "express";
import { updateIncomeById } from "../../service/incomeService";

export async function updateIncome(req: Request<{ id: string }, {}, { description: string, value: number }>, res: Response) {
    const { id } = req.params;
    const { description, value } = req.body;

    if (!description || !value) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios" });
    }

    const updatedIncomeData = {
        description,
        value,
        createdAt: new Date(),
    };

    try {
        const updatedIncome = await updateIncomeById(id, updatedIncomeData);
        res.status(200).json(updatedIncome);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}