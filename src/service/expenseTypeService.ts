import { expenseTypeModel } from "../model/expenseTypeModel";
import { IExpense } from "../model/types/expense-types";

export interface IExpenseType {
  description: string;
}

export async function createExpenseType(req: any, res: any): Promise<void> {
  const { description } = req.body;

  try {
    const newExpenseType = await expenseTypeModel.create({ description });
    res.status(201).json(newExpenseType);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function findExpenseTypes(req: any, res: any): Promise<void> {
  try {
    const expenseTypes = await expenseTypeModel.find();
    res.status(200).json(expenseTypes);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateExpenseType(req: any, res: any): Promise<void> {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const updatedExpenseType = await expenseTypeModel.findByIdAndUpdate(
      id,
      { description },
      { new: true }
    );
    if (!updatedExpenseType) {
      res.status(404).json({ message: "Tipo de gasto não encontrado" });
      return;
    }
    res.status(200).json(updatedExpenseType);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteExpenseType(req: any, res: any): Promise<void> {
  const { id } = req.params;

  try {
    const deletedExpenseType = await expenseTypeModel.findByIdAndDelete(id);
    if (!deletedExpenseType) {
      res.status(404).json({ message: "Tipo de gasto não encontrado" });
      return;
    }
    res.status(200).json({ message: "Tipo de gasto excluído com sucesso" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function getExpensesById(id: IExpense['expenseType']): Promise<IExpenseType | null> {
  try {
    const expensesType = await expenseTypeModel.findById(id);

    return expensesType;
  } catch (error: any) {
    throw new Error(error);
  }
}