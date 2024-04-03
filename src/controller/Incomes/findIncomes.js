import { getIncome } from "../../service/incomeService.js"

export async function findIncomes(req, res) {
    try {
        const incomes = await getIncome()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(400).json(error.message)
    }
}