import Income from "../model/incomeModel.js";

export async function newIncome(data) {
  try {
    const income = await Income.create(data);

    return income;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getIncome() {
  try {
    const income = await Income.find().populate("incomeType");

    return income;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateIncomeById(id, newData) {
  try {
    const updatedIncome = await Income.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!updatedIncome) {
      throw new Error("Renda não encontrada");
    }
    return updatedIncome;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteIncomeById(id) {
  try {
    const deletedIncome = await Income.findByIdAndDelete(id);
    if (!deletedIncome) {
      throw new Error("Renda não encontrada");
    }

    return deletedIncome;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getById(id) {
  try {
    const income = await Income.findById(id);
    if (!income) {
      throw new Error("Renda não encontrada");
    }

    return income;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getIncomesByMonth(month, year) {
  try {
    const incomes = await Income.find({
      createdAt: {
        $gte: new Date(year, month - 1, 1), 
        $lt: new Date(year, month, 1),
      },
    });

    return incomes;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getTotalIncomes(month) {
  const startDate = new Date(new Date().getFullYear(), month - 1, 1);
  const endDate = new Date(new Date().getFullYear(), month, 0);

  const totalIncomes = await Income.aggregate([
    {
      $match: {
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      },
    },
    {
      $group: {
        _id: null,
        total: { $sum: "$value" },
      },
    },
  ]);

  return totalIncomes.length > 0 ? totalIncomes[0].total : 0;
}