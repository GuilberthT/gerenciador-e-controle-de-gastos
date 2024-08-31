import { Request, Response } from "express";
import { getExpenses } from "../../service/expenseService.js";
import { formatMonth } from "../../utils/dateFormat.js";
import { IExpense } from "../../model/types/expense-types.js";

export async function reportTotalExpenses(req: Request, res: Response): Promise<void> {
  const month = Number(req.query.month);

  const expenses = await getExpenses();
  
  const filterExpensesByMonth = filterByMonth(expenses, month);

  const totalExpenses = sumExpenseValue(filterExpensesByMonth);

  res.status(200).json({ total: totalExpenses });
}

function sumExpenseValue(expenses: IExpense[]): number {
  let expenseValue = 0;

  expenses.forEach((expense: IExpense) => {
    expenseValue += expense.value;
  });

  return expenseValue;
}

function filterByMonth(expenses: IExpense[], month: number): IExpense[] {
  return expenses.filter((item: IExpense) => formatMonth(item.date) === month);
}