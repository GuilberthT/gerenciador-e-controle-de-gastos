import { Router } from 'express';
import expensesRouter from './expenses.js';
import incomesRouter from './incomes.js';

const router = Router();

export function setRouter(app) {
    app.use('/expenses', expensesRouter);
    app.use('/incomes', incomesRouter);
}

export default router;
