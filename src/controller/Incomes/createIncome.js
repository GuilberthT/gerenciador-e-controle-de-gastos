const { newIncome } = require("../../service/incomeService")

async function createIncome(req, res) {
    try {
        const incomeData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date(),
            date: new Date(req.body.date).toISOString(),
        }
        const responseIncome = await newIncome(incomeData)
        res.status(201).json(responseIncome)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { createIncome }
