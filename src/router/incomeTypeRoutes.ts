import { Router } from "express";
import { create_income_type_controller } from '../controller/type-incomes/createIncomeType';
import { delete_income_type_controller } from '../controller/type-incomes/deleteIncomeType';
import { find_income_types_controller } from '../controller/type-incomes/findIncomeTypes';
import { update_income_type_controller } from '../controller/type-incomes/updateIncomeType';

const income_type_router = Router();

income_type_router.post('/', create_income_type_controller);
income_type_router.get('/', find_income_types_controller);
income_type_router.put('/:id', update_income_type_controller);
income_type_router.delete('/:id', delete_income_type_controller);

export default income_type_router;