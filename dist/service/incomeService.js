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
function newIncome(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const income = yield incomeModel_1.default.create(data);
            return income;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getIncome() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const income = yield incomeModel_1.default.find().populate("incomeType");
            return income;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function updateIncomeById(id, newData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedIncome = yield incomeModel_1.default.findByIdAndUpdate(id, newData, {
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
    });
}
function deleteIncomeById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedIncome = yield incomeModel_1.default.findByIdAndDelete(id);
            if (!deletedIncome) {
                throw new Error("Renda não encontrada");
            }
            return deletedIncome;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const income = yield incomeModel_1.default.findById(id);
            if (!income) {
                throw new Error("Renda não encontrada");
            }
            return income;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
function getIncomesByMonth(month, year) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const incomes = yield incomeModel_1.default.find({
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
    });
}
function getTotalIncomes(month) {
    return __awaiter(this, void 0, void 0, function* () {
        const startDate = new Date(new Date().getFullYear(), month - 1, 1);
        const endDate = new Date(new Date().getFullYear(), month, 0);
        const totalIncomes = yield incomeModel_1.default.aggregate([
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
    });
}
//# sourceMappingURL=incomeService.js.map