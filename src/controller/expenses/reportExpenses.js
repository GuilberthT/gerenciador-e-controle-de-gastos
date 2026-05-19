const { getExpensesByMonth } = require("../../service/expenseService")

async function generateExpenseReport(req, res) {
    const { month, year } = req.body
    try {
        const expenses = await getExpensesByMonth(month, year)
        res.status(200).json(expenses)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { generateExpenseReport }
