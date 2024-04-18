import { findExpenseTypes } from "../../service/expenseTypeService.js";

export async function find_expense_types_controller(req, res) {
    try {
        await findExpenseTypes(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}