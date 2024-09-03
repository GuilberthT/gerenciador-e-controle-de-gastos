import { Request, Response } from "express";
import { newIncome } from "../../service/incomeService";
import { IIncome } from "../../model/types/income-types";

export async function createIncome(req: Request<{}, {}, IIncome>, res: Response): Promise<void> {
  try {
    const incomeData = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
      date: new Date(req.body.date).toISOString(),  
    };

    const responseIncome = await newIncome(incomeData as IIncome);  
    res.status(201).json(responseIncome);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
