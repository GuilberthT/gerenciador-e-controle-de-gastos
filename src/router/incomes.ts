import { Router } from "express";
import { createIncome } from "../controller/Incomes/createIncome";
import { findIncomes } from "../controller/Incomes/findIncomes";
import { updateIncome } from "../controller/Incomes/updateIncome";
import { deleteIncome } from "../controller/Incomes/deleteIncome";
import { getIncomeById } from "../controller/Incomes/getIncomeById";
import { getTotalIncome } from "../controller/Incomes/getTotalIncome";
import { generateIncomeReport } from "../controller/Incomes/reportIncome";

const incomesRouter = Router();

incomesRouter.post("/", createIncome);
incomesRouter.get("/", findIncomes);
incomesRouter.put("/:id", updateIncome);
incomesRouter.delete("/:id", deleteIncome);
incomesRouter.get("/:id", getIncomeById);
incomesRouter.get("/total/:month", getTotalIncome);
incomesRouter.get("/report/month", generateIncomeReport);

export default incomesRouter;
