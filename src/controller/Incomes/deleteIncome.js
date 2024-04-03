import { deleteIncomeById } from "../../service/incomeService.js";

export async function deleteIncome(req, res) {
    const { id } = req.params;
    try {
        await deleteIncomeById(id)
        res.status(200).json({ message: "Renda excluída com sucesso." })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}