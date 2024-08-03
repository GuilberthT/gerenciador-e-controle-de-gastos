import { newIncome } from "../../service/incomeService.js"

export async function createIncome(req, res) {
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