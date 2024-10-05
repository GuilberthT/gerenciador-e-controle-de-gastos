import { Router } from 'express';
import { auth } from '../middleware/auth';
import { createExpense } from '../controller/expenses/createExpense';
import { findExpenses } from '../controller/expenses/findExpenses';
import { updateExpenses } from '../controller/expenses/updateExpenses';
import { deleteExpenses } from '../controller/expenses/deleteExpenses';
import { getExpenseById } from '../controller/expenses/getExpenseById';
import { getTotalExpense } from '../controller/expenses/getExpenseTotal';

const expensesRouter = Router();

expensesRouter.get('/', auth, findExpenses);
expensesRouter.post('/', auth, createExpense);
expensesRouter.put('/:id', updateExpenses);
expensesRouter.delete('/:id', deleteExpenses);
expensesRouter.get('/:id', getExpenseById);
expensesRouter.get('/total/:month', getTotalExpense);

export default expensesRouter;

