import { getExpenseById } from "../../service/expenseService.js"

export async function getExpenseById(req, res) {
    const { id } = req.params

    try {
        const expense = await getExpenseById(id);
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}