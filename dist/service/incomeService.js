"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newIncome = newIncome;
exports.getIncome = getIncome;
exports.updateIncomeById = updateIncomeById;
exports.deleteIncomeById = deleteIncomeById;
exports.getById = getById;
exports.getIncomesByMonth = getIncomesByMonth;
exports.getTotalIncomes = getTotalIncomes;
const incomeModel_1 = __importDefault(require("../model/incomeModel"));
async function newIncome(data) {
    try {
        const income = await incomeModel_1.default.create(data);
        return income;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getIncome() {
    try {
        const income = await incomeModel_1.default.find().populate("incomeType");
        return income;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function updateIncomeById(id, newData) {
    try {
        const updatedIncome = await incomeModel_1.default.findByIdAndUpdate(id, newData, {
            new: true,
        });
        if (!updatedIncome) {
            throw new Error("Renda não encontrada");
        }
        return updatedIncome;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function deleteIncomeById(id) {
    try {
        const deletedIncome = await incomeModel_1.default.findByIdAndDelete(id);
        if (!deletedIncome) {
            throw new Error("Renda não encontrada");
        }
        return deletedIncome;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getById(id) {
    try {
        const income = await incomeModel_1.default.findById(id);
        if (!income) {
            throw new Error("Renda não encontrada");
        }
        return income;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getIncomesByMonth(month, year) {
    try {
        const incomes = await incomeModel_1.default.find({
            createdAt: {
                $gte: new Date(year, month - 1, 1),
                $lt: new Date(year, month, 1),
            },
        });
        return incomes;
    }
    catch (error) {
        throw new Error(error);
    }
}
async function getTotalIncomes(month) {
    const startDate = new Date(new Date().getFullYear(), month - 1, 1);
    const endDate = new Date(new Date().getFullYear(), month, 0);
    const totalIncomes = await incomeModel_1.default.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: startDate,
                    $lt: endDate,
                },
            },
        },
        {
            $group: {
                _id: null,
                total: { $sum: "$value" },
            },
        },
    ]);
    return totalIncomes.length > 0 ? totalIncomes[0].total : 0;
}
