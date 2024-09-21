"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createExpense_1 = require("../controller/expenses/createExpense");
const findExpenses_1 = require("../controller/expenses/findExpenses");
const updateExpenses_1 = require("../controller/expenses/updateExpenses");
const deleteExpenses_1 = require("../controller/expenses/deleteExpenses");
const getExpenseById_1 = require("../controller/expenses/getExpenseById");
const auth_1 = require("../middleware/auth");
const expensesRouter = (0, express_1.Router)();
expensesRouter.get('/', auth_1.auth, findExpenses_1.findExpenses);
expensesRouter.post('/', auth_1.auth, createExpense_1.createExpense);
expensesRouter.put('/:id', updateExpenses_1.updateExpenses);
expensesRouter.delete('/:id', deleteExpenses_1.deleteExpenses);
expensesRouter.get('/:id', getExpenseById_1.getExpenseById);
exports.default = expensesRouter;
