const { Router } = require('express')
const { auth } = require('../middleware/auth')
const { createExpense } = require('../controller/expenses/createExpense')
const { findExpenses } = require('../controller/expenses/findExpenses')
const { updateExpenses } = require('../controller/expenses/updateExpenses')
const { deleteExpenses } = require('../controller/expenses/deleteExpenses')
const { getExpenseById } = require('../controller/expenses/getExpenseById')
const { getTotalExpense } = require('../controller/expenses/getExpenseTotal')

const expensesRouter = Router()

expensesRouter.get('/', auth, findExpenses)
expensesRouter.post('/', auth, createExpense)
expensesRouter.put('/:id', updateExpenses)
expensesRouter.delete('/:id', deleteExpenses)
expensesRouter.get('/:id', getExpenseById)
expensesRouter.get('/total/:month', getTotalExpense)

module.exports = expensesRouter
