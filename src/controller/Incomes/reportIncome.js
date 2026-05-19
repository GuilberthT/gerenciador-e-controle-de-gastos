const { getIncomesByMonth } = require("../../service/incomeService")

async function generateIncomeReport(req, res) {
    const { month, year } = req.body
    try {
        const incomes = await getIncomesByMonth(parseInt(month, 10), parseInt(year, 10))
        res.status(200).json(incomes)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { generateIncomeReport }
