import { Router } from 'express';
import expensesRouter from './expenses.js';
import incomesRouter from './incomes.js';
import expenseTypeRouter from './../router/types/expenseTypeRoutes.js';
import incomeTypeRouter from './../router/types/incomeTypeRoutes.js';


const router = Router();

export function setRouter(app) {
    app.use('/expenses', expensesRouter);
    app.use('/incomes', incomesRouter);
    app.use('/expenseTypes', expenseTypeRouter);
    app.use('/incomeTypes', incomeTypeRouter);
}

export default router;
