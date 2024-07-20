import { getIncome } from "../../service/incomeService.js";
import { formatMonth } from "../../utils/dateFormat.js";

export async function reportTotalIncomes(req, res) {
  const month = req.query.month;

  const incomes = await getIncome();

  const filterIncomesByMonth = filterByMonth(incomes, month);

  const totalIncomes = sumIncomeValue(filterIncomesByMonth);

  res.status(200).json({ total: totalIncomes });
}

function sumIncomeValue(incomes) {
  let incomeValue = 0;

  incomes.forEach((income) => {
    incomeValue += income.value;
  });

  return incomeValue;
}

function filterByMonth(incomes, month) {
  return incomes.filter((item) => formatMonth(item.date) === Number(month));
}
