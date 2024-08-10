import { Request, Response } from "express";
import { getIncome } from "../../service/incomeService";
import { formatMonth } from "../../utils/dateFormat";
import { IIncome } from "../../model/types/incomeTypes";

interface IQuery {
  month: number
}

export async function reportTotalIncomes(req: Request<{}, {}, {}, IQuery>, res: Response) {
  const month = req.query.month;

  const incomes = await getIncome();

  const filterIncomesByMonth = filterByMonth(incomes, month);

  const totalIncomes = sumIncomeValue(filterIncomesByMonth);

  res.status(200).json({ total: totalIncomes });
}

function sumIncomeValue(incomes: IIncome[]) {
  let incomeValue = 0;

  incomes.forEach((income) => {
    incomeValue += income.value;
  });

  return incomeValue;
}

function filterByMonth(incomes: IIncome[], month: number) {
  return incomes.filter((item) => formatMonth(item.date) === Number(month));
}
