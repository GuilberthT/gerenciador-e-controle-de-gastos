"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseModel = void 0;
const mongoose_1 = require("mongoose");
const schemaExpense = new mongoose_1.Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    expenseType: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'ExpenseType',
        required: true
    },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
exports.expenseModel = (0, mongoose_1.model)('Expense', schemaExpense);
//# sourceMappingURL=expenseModel.js.map