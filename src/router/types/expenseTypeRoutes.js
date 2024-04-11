import { Router } from "express";
import { createExpenseType, findExpenseTypes, updateExpenseType, deleteExpenseType } from '../../controller/expenses/expenseTypeController.js';
const expenseTypeRouter = Router();

expenseTypeRouter.post('/', createExpenseType);
expenseTypeRouter.get('/', findExpenseTypes);
expenseTypeRouter.put('/:id', updateExpenseType);
expenseTypeRouter.delete('/:id', deleteExpenseType);

export default expenseTypeRouter;
