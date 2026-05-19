const { getIncome } = require("../../service/incomeService")

async function findIncomes(req, res) {
    try {
        const incomes = await getIncome()
        res.status(200).json(incomes)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { findIncomes }
