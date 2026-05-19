const { deleteExpenseType } = require("../../service/expenseTypeService")

async function delete_expense_type_controller(req, res) {
    try {
        await deleteExpenseType(req, res)
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" })
    }
}

module.exports = { delete_expense_type_controller }
