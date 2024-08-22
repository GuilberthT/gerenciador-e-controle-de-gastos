import { Router } from 'express';
import { createExpense } from '../controller/expenses/createExpense';
import { findExpenses } from '../controller/expenses/findExpenses';
import { updateExpenses } from '../controller/expenses/updateExpenses';
import { deleteExpenses } from '../controller/expenses/deleteExpenses';
import { getExpenseById } from '../controller/expenses/getExpenseById';
import { auth } from '../middleware/auth';

const expensesRouter = Router();

expensesRouter.get('/', auth, findExpenses);
expensesRouter.post('/', auth, createExpense);
expensesRouter.put('/:id', updateExpenses);
expensesRouter.delete('/:id', deleteExpenses);
expensesRouter.get('/:id', getExpenseById);

export default expensesRouter;

