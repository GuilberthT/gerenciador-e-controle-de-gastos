"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeTypeModel = void 0;
const mongoose_1 = require("mongoose");
const incomeTypeSchema = new mongoose_1.Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
exports.incomeTypeModel = (0, mongoose_1.model)("IncomeType", incomeTypeSchema);
//# sourceMappingURL=incomeTypeModel.js.map