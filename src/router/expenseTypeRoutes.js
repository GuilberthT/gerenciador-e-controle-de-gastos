const { Router } = require("express")
const { create_expense_type_controller } = require('../controller/type-expenses/createExpenseType')
const { delete_expense_type_controller } = require('../controller/type-expenses/deleteExpenseType')
const { update_expense_type_controller } = require('../controller/type-expenses/updateExpenseType')
const { find_expense_types_controller } = require('../controller/type-expenses/findExpenseType')

const expense_Type_Router = Router()

expense_Type_Router.post('/', create_expense_type_controller)
expense_Type_Router.get('/', find_expense_types_controller)
expense_Type_Router.put('/:id', update_expense_type_controller)
expense_Type_Router.delete('/:id', delete_expense_type_controller)

module.exports = expense_Type_Router
