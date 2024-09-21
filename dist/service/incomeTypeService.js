"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newCreateIncomeType = newCreateIncomeType;
exports.findIncomeTypes = findIncomeTypes;
exports.updateIncomeType = updateIncomeType;
exports.deleteIncomeType = deleteIncomeType;
const incomeTypeModel_1 = require("../model/incomeTypeModel");
async function newCreateIncomeType(req, res) {
    const { description } = req.body;
    try {
        const newIncomeType = await incomeTypeModel_1.incomeTypeModel.create({ description });
        res.status(201).json(newIncomeType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function findIncomeTypes(req, res) {
    try {
        const incomeTypes = await incomeTypeModel_1.incomeTypeModel.find();
        res.status(200).json(incomeTypes);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function updateIncomeType(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    try {
        const updatedIncomeType = await incomeTypeModel_1.incomeTypeModel.findByIdAndUpdate(id, { description }, { new: true });
        if (!updatedIncomeType) {
            res.status(404).json({ message: "Tipo de renda não encontrado" });
            return;
        }
        res.status(200).json(updatedIncomeType);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function deleteIncomeType(req, res) {
    const { id } = req.params;
    try {
        const deletedIncomeType = await incomeTypeModel_1.incomeTypeModel.findByIdAndDelete(id);
        if (!deletedIncomeType) {
            res.status(404).json({ message: "Tipo de renda não encontrado" });
            return;
        }
        res.status(200).json({ message: "Tipo de renda deletado com sucesso" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
