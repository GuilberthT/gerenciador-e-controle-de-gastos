import { deleteIncomeType } from "../../service/incomeTypeService.js";

export async function delete_income_type_controller(req, res) {
    try {
        await deleteIncomeType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}