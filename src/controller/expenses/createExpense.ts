import { Request, Response } from "express";
import { getExpensesById } from "../../service/expenseTypeService";
import { newExpense } from "../../service/expenseService";

interface Expense {
  description: string;
  value: number;
  expenseType: string;
  createAt?: Date;
}

export async function createExpense(req: Request, res: Response): Promise<void> {
  try {
    await validates(req.body);
    const expense: Expense = {
      ...req.body,
      createAt: new Date(),
    };
    const myExpense = await newExpense(expense);

    res.status(200).json(myExpense);
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
}

async function validates(body: Expense): Promise<void> {
  validateRequiredDescription(body.description);
  validateRequiredValue(body.value);
  await validateRequiredExpenseType(body.expenseType);
}

function validateRequiredDescription(description: string): void {
  if (!description) {
    throw new Error("A descrição é obrigatória!");
  }
}

function validateRequiredValue(value: number): void {
  if (!value) {
    throw new Error("O valor é obrigatório!");
  }
}

async function validateRequiredExpenseType(idExpenseType: string): Promise<void> {
  if (!idExpenseType) {
    throw new Error("O tipo de despesa é obrigatório!");
  }

  const expenseType = await getExpensesById(idExpenseType);

  if (!expenseType) {
    throw new Error("Tipo de despesa não encontrado!");
  }
}
