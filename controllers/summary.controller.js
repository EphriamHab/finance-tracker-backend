import prisma from "../utils/prisma.js";

// export const getSummary = async (req, res, next) => {
//   try {
//     const income = await prisma.transaction.aggregate({
//       _sum: { amount: true },
//       where: { type: "income" },
//     });

//     const expense = await prisma.transaction.aggregate({
//       _sum: { amount: true },
//       where: { type: "expense" },
//     });

//     const grouped = await prisma.transaction.groupBy({
//       by: ["category"],
//       _sum: { amount: true },
//     });

//     const totalIncome = income._sum.amount || 0;
//     const totalExpenses = expense._sum.amount || 0;

//     res.json({
//       totalIncome,
//       totalExpenses,
//       balance: totalIncome - totalExpenses,
//       byCategory: grouped,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const getSummary = async (req, res, next) => {
  try {
    const userId = req.user.userId; 
    const income = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: {
        type: "income",
        userId: userId,
      },
    });

    const expense = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: {
        type: "expense",
        userId: userId,
      },
    });

    const grouped = await prisma.transaction.groupBy({
      by: ["category"],
      where: {
        userId: userId,
      },
      _sum: { amount: true },
    });

    const totalIncome = income._sum.amount || 0;
    const totalExpenses = expense._sum.amount || 0;

    res.json({
      totalIncome,
      totalExpenses,
      balance: totalIncome - totalExpenses,
      byCategory: grouped,
    });
  } catch (error) {
    next(error);
  }
};
