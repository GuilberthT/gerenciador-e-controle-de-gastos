const { getTotalExpenses } = require("../../service/expenseService")

async function getTotalExpense(req, res) {
    const { month } = req.params
    try {
        const total = await getTotalExpenses(parseInt(month, 10))
        res.status(200).json({ total })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getTotalExpense }
