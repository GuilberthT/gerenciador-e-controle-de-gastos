import { newExpense } from "../../service/expenseService.js";

export async function createExpense(req, res) {
    const { descricao, valor } = req.body;

    if (!descricao || !valor) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios." })
    }

    const expense = {
        description: descricao,
        value: valor,
        createAt: new Date()
    }

    try {
        const myExpense = await newExpense(expense)

        res.status(200).json(myExpense)
    } catch (error) {
        res.status(400).json(error.message)
    }
}