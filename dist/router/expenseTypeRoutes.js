"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createExpenseType_1 = require("../controller/type-expenses/createExpenseType");
const deleteExpenseType_1 = require("../controller/type-expenses/deleteExpenseType");
const updateExpenseType_1 = require("../controller/type-expenses/updateExpenseType");
const findExpenseType_1 = require("../controller/type-expenses/findExpenseType");
const expense_Type_Router = (0, express_1.Router)();
expense_Type_Router.post('/', createExpenseType_1.create_expense_type_controller);
expense_Type_Router.get('/', findExpenseType_1.find_expense_types_controller);
expense_Type_Router.put('/:id', updateExpenseType_1.update_expense_type_controller);
expense_Type_Router.delete('/:id', deleteExpenseType_1.delete_expense_type_controller);
exports.default = expense_Type_Router;
//# sourceMappingURL=expenseTypeRoutes.js.map