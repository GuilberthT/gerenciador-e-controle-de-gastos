import { updateIncomeType } from "../../service/incomeTypeService.js";

export async function update_income_type_controller(req, res) {
    try {
        await updateIncomeType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}