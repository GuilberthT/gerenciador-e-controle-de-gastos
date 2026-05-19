const { getTotalIncomes } = require('../../service/incomeService')

async function getTotalIncome(req, res) {
    const { month } = req.params
    try {
        const total = await getTotalIncomes(parseInt(month, 10))
        res.status(200).json({ total })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getTotalIncome }
