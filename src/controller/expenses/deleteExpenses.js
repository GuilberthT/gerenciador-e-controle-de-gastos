import { deleteExpenseById } from "../../service/expenseService.js";

export async function deleteExpenses(req, res) {
    const { id } = req.params;
    try {
        await deleteExpenseById(id)
        res.status(200).json({ message: 'Despesa excluída com sucesso.' });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}