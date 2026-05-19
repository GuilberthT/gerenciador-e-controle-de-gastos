const { updateIncomeById } = require("../../service/incomeService")

async function updateIncome(req, res) {
    const { id } = req.params
    const { description, value } = req.body

    if (!description || !value) {
        return res.status(400).json({ message: "Descrição e valor são obrigatórios" })
    }

    const updatedIncomeData = {
        description,
        value,
        createdAt: new Date(),
    }

    try {
        const updatedIncome = await updateIncomeById(id, updatedIncomeData)
        res.status(200).json(updatedIncome)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { updateIncome }
