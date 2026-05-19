const { Router } = require("express")
const { create_income_type_controller } = require('../controller/type-incomes/createIncomeType')
const { delete_income_type_controller } = require('../controller/type-incomes/deleteIncomeType')
const { find_income_types_controller } = require('../controller/type-incomes/findIncomeTypes')
const { update_income_type_controller } = require('../controller/type-incomes/updateIncomeType')

const income_type_router = Router()

income_type_router.post('/', create_income_type_controller)
income_type_router.get('/', find_income_types_controller)
income_type_router.put('/:id', update_income_type_controller)
income_type_router.delete('/:id', delete_income_type_controller)

module.exports = income_type_router
