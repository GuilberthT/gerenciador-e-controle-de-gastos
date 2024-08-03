import { getTotalIncomes } from '../../service/incomeService.js';

export async function getTotalIncome(req, res) {
  const { month } = req.params;

  try {
    const total = await getTotalIncomes(month);
    res.status(200).json({ total });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}