"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const incomeSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    incomeType: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "IncomeType",
        required: true
    },
    date: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
exports.default = (0, mongoose_1.model)("Income", incomeSchema);
//# sourceMappingURL=incomeModel.js.map