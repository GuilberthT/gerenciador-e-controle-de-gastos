import { Router } from 'express'
import { reportTotalIncomes } from '../controller/reports/totalIncomeReport';
import { reportTotalExpenses } from '../controller/reports/totalExpenseReport';

const reportsRouter = Router();

reportsRouter.get("/totalExpenses", reportTotalExpenses);
reportsRouter.get("/totalIncomes", reportTotalIncomes)

export default reportsRouter;

