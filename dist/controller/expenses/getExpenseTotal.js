"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalExpense = getTotalExpense;
const expenseService_1 = require("../../service/expenseService");
function getTotalExpense(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { month } = req.params;
        try {
            const total = yield (0, expenseService_1.getTotalExpenses)(parseInt(month, 10)); // Conversão para number
            res.status(200).json({ total });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
//# sourceMappingURL=getExpenseTotal.js.map