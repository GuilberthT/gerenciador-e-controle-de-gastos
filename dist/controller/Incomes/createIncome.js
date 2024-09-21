"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIncome = createIncome;
const incomeService_1 = require("../../service/incomeService");
async function createIncome(req, res) {
    try {
        const incomeData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date(),
            date: new Date(req.body.date).toISOString(),
        };
        const responseIncome = await (0, incomeService_1.newIncome)(incomeData);
        res.status(201).json(responseIncome);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
