const { getExpenses } = require("../../service/expenseService")
const { formatMonth } = require("../../utils/dateFormat")

async function reportTotalExpenses(req, res) {
    const month = Number(req.query.month)
    const expenses = await getExpenses()
    const filterExpensesByMonth = filterByMonth(expenses, month)
    const totalExpenses = sumExpenseValue(filterExpensesByMonth)
    res.status(200).json({ total: totalExpenses })
}

function sumExpenseValue(expenses) {
    let expenseValue = 0
    expenses.forEach((expense) => {
        expenseValue += expense.value
    })
    return expenseValue
}

function filterByMonth(expenses, month) {
    return expenses.filter((item) => formatMonth(item.date) === month)
}

module.exports = { reportTotalExpenses }
