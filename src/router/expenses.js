// expenses.js

import { Router } from 'express'
import { createExpense } from '../controller/expenses/createExpenses.js'
import { findExpenses } from '../controller/expenses/findExpenses.js'
import { updateExpenses } from '../controller/expenses/updateExpenses.js'
import { deleteExpenses } from '../controller/expenses/deleteExpenses.js'
import { getExpenseById } from '../controller/expenses/getExpenseById.js' 

const expensesRouter = Router()

expensesRouter.get('/', findExpenses)
expensesRouter.post('/', createExpense)
expensesRouter.put('/:id', updateExpenses)
expensesRouter.delete('/:id', deleteExpenses)
expensesRouter.get('/:id', getExpenseById) 

export default expensesRouter

