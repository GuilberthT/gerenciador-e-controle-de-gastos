import { Router } from 'express'
import { reportTotalIncomes } from '../controller/reports/totalIncomeReport.js';
import { reportTotalExpenses } from '../controller/reports/totalExpenseReport.js';

const reportsRouter = Router();

reportsRouter.get("/totalExpenses", reportTotalExpenses);
reportsRouter.get("/totalIncomes", reportTotalIncomes)

export default reportsRouter;

