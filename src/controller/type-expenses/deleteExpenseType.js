import { deleteExpenseType } from "../../service/expenseTypeService.js";

export async function delete_expense_type_controller(req, res) {
    try {
        await deleteExpenseType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}