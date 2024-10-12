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
exports.find_income_types_controller = find_income_types_controller;
const incomeTypeService_1 = require("../../service/incomeTypeService");
function find_income_types_controller(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, incomeTypeService_1.findIncomeTypes)(req, res);
        }
        catch (error) {
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    });
}
//# sourceMappingURL=findIncomeTypes.js.map