const { Router } = require('express')
const { reportTotalIncomes } = require('../controller/reports/totalIncomeReport')
const { reportTotalExpenses } = require('../controller/reports/totalExpenseReport')

const reportsRouter = Router()

reportsRouter.get("/totalExpenses", reportTotalExpenses)
reportsRouter.get("/totalIncomes", reportTotalIncomes)

module.exports = reportsRouter
