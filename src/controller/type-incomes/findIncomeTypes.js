const { findIncomeTypes } = require("../../service/incomeTypeService")

async function find_income_types_controller(req, res) {
    try {
        await findIncomeTypes(req, res)
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" })
    }
}

module.exports = { find_income_types_controller }
