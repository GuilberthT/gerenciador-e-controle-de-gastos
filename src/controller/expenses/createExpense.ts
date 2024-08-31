import { Request, Response } from "express";
import { getExpensesById } from "../../service/expenseTypeService";
import { newExpense } from "../../service/expenseService";
import { IExpense } from "../../model/types/expense-types";

export async function createExpense(req: Request<{}, {}, IExpense>, res: Response): Promise<void> {
  try {
    await validates(req.body);

    const expense = {
      ...req.body,
      createAt: new Date(), 
      date: new Date(req.body.date)
    };

    const myExpense = await newExpense(expense);

    res.status(200).json(myExpense);
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
}

async function validates(body: IExpense): Promise<void> {
  validateRequiredDescription(body.description);
  validateRequiredValue(body.value);
  await validateRequiredExpenseType(body.expenseType);
  validateRequiredPaymentDate(body.date);
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

async function validateRequiredExpenseType(idExpenseType: IExpense['expenseType']): Promise<void> {
  if (!idExpenseType) {
    throw new Error("O tipo de despesa é obrigatório!");
  }

  const expenseType = await getExpensesById(idExpenseType);

  if (!expenseType) {
    throw new Error("Tipo de despesa não encontrado!");
  }
}

function validateRequiredPaymentDate(paymentDate: string | Date): void {
  if (!paymentDate) {
    throw new Error("A data de pagamento é obrigatória!");
  }
}
