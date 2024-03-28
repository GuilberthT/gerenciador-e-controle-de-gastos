import { Router } from 'express'
import { createExpense } from '../controller/expenses/createExpenses.js'
import { findExpenses } from '../controller/expenses/findExpenses.js'

const expensesRouter = Router()

expensesRouter.get('/', findExpenses)
expensesRouter.post('/', createExpense)

export default expensesRouter