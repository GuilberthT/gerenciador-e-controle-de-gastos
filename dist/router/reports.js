"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const totalIncomeReport_1 = require("../controller/reports/totalIncomeReport");
const totalExpenseReport_1 = require("../controller/reports/totalExpenseReport");
const reportsRouter = (0, express_1.Router)();
reportsRouter.get("/totalExpenses", totalExpenseReport_1.reportTotalExpenses);
reportsRouter.get("/totalIncomes", totalIncomeReport_1.reportTotalIncomes);
exports.default = reportsRouter;
//# sourceMappingURL=reports.js.map