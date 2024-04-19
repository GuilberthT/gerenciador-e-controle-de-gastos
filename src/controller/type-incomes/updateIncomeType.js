import { updateIncomeType } from "../../service/incomeTypeService.js";

export async function update_income_type_controller(req, res) {
    try {
        await validates(req.body);
        await updateIncomeType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}

async function validates(body) {
    validateRequiredDescription(body.description);
}

function validateRequiredDescription(description) {
    if (!description) {
        throw new Error("A descrição é obrigatória!");
    }
}