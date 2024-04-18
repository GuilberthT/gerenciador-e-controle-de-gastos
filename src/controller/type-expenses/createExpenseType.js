import { createExpenseType } from "../../service/expenseTypeService.js";

export async function create_expense_type_controller(req, res) {
    try {
        await createExpenseType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}