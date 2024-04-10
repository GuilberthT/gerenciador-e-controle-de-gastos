import { expenseType, expenseType } from "../../model/expenseTypeModel";
import { updateExpenseById } from "../../service/expenseService";

export async function createExpenseType(req, res) {
    const { title, description } = req.body;

    try {
        const newExpenseType = await expenseType.create({ title, description });
        res.status(201).json(newExpenseType)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export async function findExpenseTypes(req, res) {
    try {
        const expenseType = await expenseType.find();
        res.status(200).json(expenseType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function updateExpenseType(req, res) {
    const { id } = req.params;
    const { title, description } = req.body

    try {
        const updatedExpenseType = await expenseType.findByIdAndUpdate(id, { title, description }, { new: true })
        if (!updatedExpenseType) {
            return res.status(404).json({ message: "Tipo de gasto não encontrado" })
        }
        res.status(200).json(updateExpenseById)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

import { expenseType } from "../../model/expenseTypeModel";

export async function deleteExpenseType(req, res) {
    const { id } = req.params;

    try {
        const deletedExpenseType = await expenseType.findByIdAndDelete(id);
        if (!deletedExpenseType) {
            return res.status(404).json({ message: "Tipo de gasto não encontrado" })
        }
        res.status(200).json({ message: "TIpo de gasto excluído com sucesso" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
// Implementar as funções para atualizar e excluir tipos de gastos?