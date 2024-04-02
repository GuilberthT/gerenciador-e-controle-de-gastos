import expensesRouter from "./expenses.js";

export function setRouter(app) {
    app.use('/gastos', expensesRouter)
}