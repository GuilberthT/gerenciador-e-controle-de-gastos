import { newCreateIncomeType } from "../../service/incomeTypeService.js";

export async function create_income_type_controller(req, res) {
    try {
        await newCreateIncomeType(req, res);
    } catch (error) {
        res.status(500).json({ message: "Erro interno do servidor" });
    }
}