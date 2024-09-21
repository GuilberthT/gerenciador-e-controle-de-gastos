"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseTypeModel = void 0;
const mongoose_1 = require("mongoose");
const schemaExpenseType = new mongoose_1.Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
exports.expenseTypeModel = (0, mongoose_1.model)("ExpenseType", schemaExpenseType);
