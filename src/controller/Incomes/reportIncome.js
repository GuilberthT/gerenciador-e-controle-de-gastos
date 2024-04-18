import { getIncomesByMonth } from "../../service/incomeService.js";

export async function generateIncomeReport(req, res) {
    const { month, year } = req.body;

    try {
        const incomes = await getIncomesByMonth(month, year);
        res.status(200).json(incomes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}