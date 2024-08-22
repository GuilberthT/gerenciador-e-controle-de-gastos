import { expenseModel } from "../model/expenseModel";

export interface IExpense {
  description: string;
  value: number;
  expenseType: string;
  paymentDate: Date;
  createdAt?: Date;
}

export async function newExpense(data: IExpense): Promise<IExpense> {
  try {
    const { description, value, expenseType, paymentDate } = data;
    const expense = await expenseModel.create({
      description,
      value,
      expenseType,
      createdAt: new Date(),
      paymentDate,
    });

    return expense;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getExpenses(): Promise<IExpense[]> {
  try {
    const expenses = await expenseModel.find().populate("expenseType");

    return expenses;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateExpenseById(id: string, newData: Partial<IExpense>): Promise<IExpense | null> {
  try {
    const updatedExpense = await expenseModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updatedExpense) {
      throw new Error("Despesa não encontrada.");
    }
    return updatedExpense;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteExpenseById(id: string): Promise<IExpense | null> {
  try {
    const deletedExpense = await expenseModel.findByIdAndDelete(id);
    if (!deletedExpense) {
      throw new Error("Despesa não encontrada.");
    }
    return deletedExpense;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getExpenseById(id: string): Promise<IExpense | null> {
  try {
    const expense = await expenseModel.findById(id);
    if (!expense) {
      throw new Error("Despesa não encontrada.");
    }
    return expense;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getExpensesByMonth(month: number, year: number): Promise<IExpense[]> {
  try {
    const expenses = await expenseModel.find({
      createdAt: {
        $gte: new Date(year, month - 1, 1),
        $lt: new Date(year, month, 1),
      },
    });

    return expenses;
  } catch (error: any) {
    throw new Error(error);
  }
}