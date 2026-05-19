const { getExpenses } = require("../../service/expenseService")

async function findExpenses(req, res) {
    try {
        const expenses = await getExpenses()
        res.status(200).json(expenses)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { findExpenses }
