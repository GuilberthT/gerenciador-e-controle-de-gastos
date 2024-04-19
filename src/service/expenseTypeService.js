import { expenseTypeModel } from "../model/expenseTypeModel.js"


export async function createExpenseType(req, res) {
    const { description } = req.body;
    
    try {
        const newExpenseType = await expenseTypeModel.create({ description });
        res.status(201).json(newExpenseType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function findExpenseTypes(req, res) {
    try {
        const expenseTypes = await expenseTypeModel.find();
        res.status(200).json(expenseTypes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function updateExpenseType(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    
    try {
        const updatedExpenseType = await expenseTypeModel.findByIdAndUpdate(id, { description }, { new: true });
        if (!updatedExpenseType) {
            return res.status(404).json({ message: "Tipo de gasto não encontrado" });
        }
        res.status(200).json(updatedExpenseType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteExpenseType(req, res) {
    const { id } = req.params;
    
    try {
        const deletedExpenseType = await expenseTypeModel.findByIdAndDelete(id);
        if (!deletedExpenseType) {
            return res.status(404).json({ message: "Tipo de gasto não encontrado" });
        }
        res.status(200).json({ message: "Tipo de gasto excluído com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function getExpensesById(id) {
    try {
        const expensesType = await expenseTypeModel.findById(id)

        return expensesType
    } catch (error) {
        throw new Error(error)
    }
}
