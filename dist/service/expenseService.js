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
exports.newExpense = newExpense;
exports.getExpenses = getExpenses;
exports.updateExpenseById = updateExpenseById;
exports.deleteExpenseById = deleteExpenseById;
exports.getExpenseById = getExpenseById;
exports.getExpensesByMonth = getExpensesByMonth;
exports.getTotalExpenses = getTotalExpenses;
const expenseModel_1 = require("../model/expenseModel");
function newExpense(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { description, value, expenseType, date } = data;
            const expense = yield expenseModel_1.expenseModel.create({
                description,
                value,
                expenseType,
                createdAt: new Date(),
                date,
            });
            return expense;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getExpenses() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expenses = yield expenseModel_1.expenseModel.find().populate("expenseType");
            return expenses;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function updateExpenseById(id, newData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedExpense = yield expenseModel_1.expenseModel.findByIdAndUpdate(id, newData, {
                new: true,
            });
            if (!updatedExpense) {
                throw new Error("Despesa não encontrada.");
            }
            return updatedExpense;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function deleteExpenseById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedExpense = yield expenseModel_1.expenseModel.findByIdAndDelete(id);
            if (!deletedExpense) {
                throw new Error("Despesa não encontrada.");
            }
            return deletedExpense;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getExpenseById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expense = yield expenseModel_1.expenseModel.findById(id);
            if (!expense) {
                throw new Error("Despesa não encontrada.");
            }
            return expense;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getExpensesByMonth(month, year) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const expenses = yield expenseModel_1.expenseModel.find({
                createdAt: {
                    $gte: new Date(year, month - 1, 1),
                    $lt: new Date(year, month, 1),
                },
            });
            return expenses;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getTotalExpenses(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const startDate = new Date(new Date().getFullYear(), month - 1, 1);
        const endDate = new Date(new Date().getFullYear(), month, 0);
        const totalExpenses = yield expenseModel_1.expenseModel.aggregate([
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
        return totalExpenses.length > 0 ? totalExpenses[0].total : 0;
    });
}
//# sourceMappingURL=expenseService.js.map