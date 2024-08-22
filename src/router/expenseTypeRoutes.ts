import { Router } from "express";
import { create_expense_type_controller } from '../controller/type-expenses/createExpenseType';
import { delete_expense_type_controller } from '../controller/type-expenses/deleteExpenseType';
import { update_expense_type_controller } from '../controller/type-expenses/updateExpenseType';
import { find_expense_types_controller } from '../controller/type-expenses/findExpenseType';

const expense_Type_Router = Router();

expense_Type_Router.post('/', create_expense_type_controller);
expense_Type_Router.get('/', find_expense_types_controller);
expense_Type_Router.put('/:id', update_expense_type_controller);
expense_Type_Router.delete('/:id', delete_expense_type_controller);

export default expense_Type_Router;
