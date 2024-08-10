import { Router } from 'express';
import expensesRouter from './expenses';
import incomesRouter from './incomes';
import expenseTypeRouter from './expenseTypeRoutes';
import incomeTypeRouter from './incomeTypeRoutes';
import userRouter from './user';
import reportsRouter from './reports';
import { Express } from 'express-serve-static-core'


const router = Router();

export function setRouter(app: Express) {
    app.use('/expenses', expensesRouter);
    app.use('/incomes', incomesRouter);
    app.use('/expenseTypes', expenseTypeRouter);
    app.use('/incomeTypes', incomeTypeRouter);
    app.use('/user', userRouter)
    app.use('/reports', reportsRouter)
}

export default router;
