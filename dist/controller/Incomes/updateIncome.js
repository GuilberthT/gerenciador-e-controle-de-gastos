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
exports.updateIncome = updateIncome;
const incomeService_1 = require("../../service/incomeService");
function updateIncome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { description, value } = req.body;
        if (!description || !value) {
            return res.status(400).json({ message: "Descrição e valor são obrigatórios" });
        }
        const updatedIncomeData = {
            description,
            value,
            createdAt: new Date(),
        };
        try {
            const updatedIncome = yield (0, incomeService_1.updateIncomeById)(id, updatedIncomeData);
            res.status(200).json(updatedIncome);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
//# sourceMappingURL=updateIncome.js.map