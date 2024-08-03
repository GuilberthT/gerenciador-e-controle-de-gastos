import incomeService from '../../service/incomeService.js';

export async function getTotalIncome(req, res) {
  try {
    const { month } = req.params;
    const total = await incomeService.getTotalIncomes(month);
    res.json(total);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
}