import { newIncome } from "../../service/incomeService.js"

export async function createIncome(req, res) {
    // const { description, value } = req.body;

    // if (!description || !value) {
    //     return res.status(400).json({ message: "Descrição e valor são obrigatórios." })
    // }

    const income = {
        ...req.body,
        createdAt: new Date()
    }

    try {
        const responseIncome = await newIncome(income);

        res.status(201).json(responseIncome);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}