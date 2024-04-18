import { incomeTypeModel } from "../model/incomeTypeModel.js"

export async function getIncomeById(id) {
    try {
        const incomeType = await incomeTypeModel.findById(id)

        return incomeType
    } catch (error) {
        throw new Error(error)
    }
}

export async function newCreateIncomeType(req, res) {
    const { title, description } = req.body;

    try {
        const newIncomeType = await incomeTypeModel.create({ title, description });
        res.status(201).json(newIncomeType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function findIncomeTypes(req, res) {
    try {
        const incomeTypes = await incomeTypeModel.find();
        res.status(200).json(incomeTypes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function updateIncomeType(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const updatedIncomeType = await incomeTypeModel.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!updatedIncomeType) {
            return res.status(404).json({ message: "Tipo de renda não encontrada" });
        }
        res.status(200).json(updatedIncomeType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteIncomeType(req, res) {
    const { id } = req.params;

    try {
        const deletedIncomeType = await incomeTypeModel.findByIdAndDelete(id);
        if (!deletedIncomeType) {
            return res.status(404).json({ message: "Tipo de renda não encontrada" });
        }
        res.status(200).json({ message: "Tipo de renda excluída com sucesso" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}