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
exports.newCreateIncomeType = newCreateIncomeType;
exports.findIncomeTypes = findIncomeTypes;
exports.updateIncomeType = updateIncomeType;
exports.deleteIncomeType = deleteIncomeType;
const incomeTypeModel_1 = require("../model/incomeTypeModel");
function newCreateIncomeType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { description } = req.body;
        try {
            const newIncomeType = yield incomeTypeModel_1.incomeTypeModel.create({ description });
            res.status(201).json(newIncomeType);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function findIncomeTypes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const incomeTypes = yield incomeTypeModel_1.incomeTypeModel.find();
            res.status(200).json(incomeTypes);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function updateIncomeType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { description } = req.body;
        try {
            const updatedIncomeType = yield incomeTypeModel_1.incomeTypeModel.findByIdAndUpdate(id, { description }, { new: true });
            if (!updatedIncomeType) {
                res.status(404).json({ message: "Tipo de renda não encontrado" });
                return;
            }
            res.status(200).json(updatedIncomeType);
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
function deleteIncomeType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const deletedIncomeType = yield incomeTypeModel_1.incomeTypeModel.findByIdAndDelete(id);
            if (!deletedIncomeType) {
                res.status(404).json({ message: "Tipo de renda não encontrado" });
                return;
            }
            res.status(200).json({ message: "Tipo de renda deletado com sucesso" });
        }
        catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
//# sourceMappingURL=incomeTypeService.js.map