import { createExpenseType } from "../../service/expenseTypeService.js";

export async function create_expense_type_controller(req, res) {
    try {
        await validates(req.body);
        await createExpenseType(req, res);
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