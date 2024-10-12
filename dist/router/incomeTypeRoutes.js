"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createIncomeType_1 = require("../controller/type-incomes/createIncomeType");
const deleteIncomeType_1 = require("../controller/type-incomes/deleteIncomeType");
const findIncomeTypes_1 = require("../controller/type-incomes/findIncomeTypes");
const updateIncomeType_1 = require("../controller/type-incomes/updateIncomeType");
const income_type_router = (0, express_1.Router)();
income_type_router.post('/', createIncomeType_1.create_income_type_controller);
income_type_router.get('/', findIncomeTypes_1.find_income_types_controller);
income_type_router.put('/:id', updateIncomeType_1.update_income_type_controller);
income_type_router.delete('/:id', deleteIncomeType_1.delete_income_type_controller);
exports.default = income_type_router;
//# sourceMappingURL=incomeTypeRoutes.js.map