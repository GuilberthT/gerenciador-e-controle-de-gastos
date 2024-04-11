import { getExpensesById } from "../../service/expensaTypeService.js";
import { newExpense } from "../../service/expenseService.js";

export async function createExpense(req, res) {
    try {
        await validates(req.body)
        const expense = {
            ...req.body,
            createAt: new Date()
        }
        const myExpense = await newExpense(expense)

        res.status(200).json(myExpense)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

async function validates(body) {
    validateRequiredDescription(body.description)
    validateRequiredValue(body.value)
    await validateRequiredExpensaType(body.expenseType)
}

function validateRequiredDescription(description) {
    if (!description) {
        throw new Error("A descrição é obrigatória!")
    }

    return
}

function validateRequiredValue(value) {
    if (!value) {
        throw new Error("O valor é obrigatório!")
    }

    return
}

async function validateRequiredExpensaType(idExpenseType) {
    if (!idExpenseType) {
        throw new Error("O tipo de despesa é obrigatório!")
    }

    const expenseType = await getExpensesById(idExpenseType)

    if (!expenseType) {
        throw new Error("Tipo de despesa não encontrado!")
    }

    return
}