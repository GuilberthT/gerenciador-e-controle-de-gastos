import { incomeModel } from "../../model/incomeModel.js";

export async function createIncome(req, res) {
    const { description, value } = req.body;

    if (!description || !value) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios." })
    }

    const income = {
        description: description,
        value: value,
        createdAt: new Date()
    }

    try {
        const newIncome = await incomeModel.create(income);

        res.status(201).json(newIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}