const { Router } = require("express")
const { createIncome } = require("../controller/Incomes/createIncome")
const { findIncomes } = require("../controller/Incomes/findIncomes")
const { updateIncome } = require("../controller/Incomes/updateIncome")
const { deleteIncome } = require("../controller/Incomes/deleteIncome")
const { getIncomeById } = require("../controller/Incomes/getIncomeById")
const { getTotalIncome } = require("../controller/Incomes/getTotalIncome")
const { generateIncomeReport } = require("../controller/Incomes/reportIncome")

const incomesRouter = Router()

incomesRouter.post("/", createIncome)
incomesRouter.get("/", findIncomes)
incomesRouter.put("/:id", updateIncome)
incomesRouter.delete("/:id", deleteIncome)
incomesRouter.get("/:id", getIncomeById)
incomesRouter.get("/total/:month", getTotalIncome)
incomesRouter.get("/report/month", generateIncomeReport)

module.exports = incomesRouter
