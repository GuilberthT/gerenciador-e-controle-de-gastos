import { Request, Response } from "express";
import { getExpenses } from "../../service/expenseService.js";
import { formatMonth } from "../../utils/dateFormat.js";

export async function reportTotalExpenses(req: Request, res: Response) {
  const month = req.query.month;

  const expenses = await getExpenses();

  const filterExpensesByMonth = await filterByMonth(expenses, month);

  const totalExpenses = sumExpenseValue(filterExpensesByMonth);

  res.status(200).json({ total: totalExpenses });
}

function sumExpenseValue(expenses) {
  let expenseValue = 0;

  expenses.forEach((expense) => {
    expenseValue += expense.value;
  });

  return expenseValue;
}

function filterByMonth(expenses, month) {
  return expenses.filter((item) => formatMonth(item.date) === Number(month));
}
