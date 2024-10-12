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
exports.createIncome = createIncome;
const incomeService_1 = require("../../service/incomeService");
function createIncome(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const incomeData = Object.assign(Object.assign({}, req.body), { createdAt: new Date(), updatedAt: new Date(), date: new Date(req.body.date).toISOString() });
            const responseIncome = yield (0, incomeService_1.newIncome)(incomeData);
            res.status(201).json(responseIncome);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
//# sourceMappingURL=createIncome.js.map