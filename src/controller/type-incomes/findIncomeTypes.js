import { findIncomeTypes } from "../../service/incomeTypeService.js";

export async function find_income_types_controller(req, res) {
    try {
        await findIncomeTypes(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}
