import { incomeTypeModel } from "../model/incomeTypeModel";

export interface IIncomeType {
  description: string;
}

export async function newCreateIncomeType(req: any, res: any): Promise<void> {
  const { description } = req.body;

  try {
    const newIncomeType = await incomeTypeModel.create({ description });
    res.status(201).json(newIncomeType);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function findIncomeTypes(req: any, res: any): Promise<void> {
  try {
    const incomeTypes = await incomeTypeModel.find();
    res.status(200).json(incomeTypes);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateIncomeType(req: any, res: any): Promise<void> {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const updatedIncomeType = await incomeTypeModel.findByIdAndUpdate(
      id,
      { description },
      { new: true }
    );
    if (!updatedIncomeType) {
      res.status(404).json({ message: "Tipo de renda não encontrada" });
      return;
    }
    res.status(200).json(updatedIncomeType);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteIncomeType(req: any, res: any): Promise<void> {
  const { id