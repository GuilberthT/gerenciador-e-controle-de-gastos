
import { Router } from 'express';
import { createIncome } from '../controller/Incomes/createIncome.js';
import { findIncomes } from '../controller/Incomes/findIncomes.js';
import { updateIncome } from '../controller/Incomes/updateIncome.js';
import { deleteIncome } from '../controller/Incomes/deleteIncome.js';
import { getIncomeById } from '../controller/Incomes/getIncomeById.js';
import { getTotalIncome } from '../controller/Incomes/getTotalIncome.js';


const incomesRouter = Router();

incomesRouter.post('/', createIncome);
incomesRouter.get('/', findIncomes);
incomesRouter.put('/:id', updateIncome);
incomesRouter.delete('/:id', deleteIncome);
incomesRouter.get('/:id', getIncomeById);
Router.get('/total/:month', getTotalIncome);

export default incomesRouter;