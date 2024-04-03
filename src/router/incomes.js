
import { Router } from 'express';
import { createIncome } from './../controller/Incomes/createIncome.js';
import { findIncomes } from '../controller/Incomes/findIncomes.js';
import { updateIncome } from '../controller/Incomes/updateIncome.js';
import { deleteIncome } from '../controller/Incomes/deleteIncome.js';

const incomesRouter = Router();

incomesRouter.post('/', createIncome);
incomesRouter.get('/', findIncomes);
incomesRouter.put('/', updateIncome);
incomesRouter.delete('/', deleteIncome)

export default incomesRouter;