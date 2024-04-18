import { updateExpenseType } from "../../service/expenseTypeService.js";

export async function update_expense_type_controller(req, res) {
    try {
        await updateExpenseType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}