const expensesRouter = require('./expenses')
const incomesRouter = require('./incomes')
const expenseTypeRouter = require('./expenseTypeRoutes')
const incomeTypeRouter = require('./incomeTypeRoutes')
const userRouter = require('./user')
const reportsRouter = require('./reports')

function setRouter(app) {
    app.use('/expenses', expensesRouter)
    app.use('/incomes', incomesRouter)
    app.use('/expenseTypes', expenseTypeRouter)
    app.use('/incomeTypes', incomeTypeRouter)
    app.use('/user', userRouter)
    app.use('/reports', reportsRouter)
}

module.exports = { setRouter }
