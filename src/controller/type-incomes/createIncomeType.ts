import { Request, Response } from "express";
import { newCreateIncomeType } from "../../service/incomeTypeService";

export async function create_income_type_controller(req: Request, res: Response): Promise<void> {
    try {
        await validates(req.body);
        await newCreateIncomeType(req, res);
    } catch (error: any) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

async function validates(body: { description: string }): Promise<void> {
    validateRequiredDescription(body.description);
}

function validateRequiredDescription(description: string): void {
    if (!description) {
        throw new Error("A descrição é obrigatória!");
    }
}