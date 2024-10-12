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
exports.generateExpenseReport = generateExpenseReport;
const expenseService_1 = require("../../service/expenseService");
function generateExpenseReport(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { month, year } = req.body;
        try {
            const expenses = yield (0, expenseService_1.getExpensesByMonth)(month, year);
            res.status(200).json(expenses);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
//# sourceMappingURL=reportExpenses.js.map