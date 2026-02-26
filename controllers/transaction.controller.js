import prisma from "../utils/prisma.js";
import { transactionSchema } from "../validators/transaction.validator.js";

export const createTransaction = async (req, res, next) => {
  try {
    const data = transactionSchema.parse(req.body);

    const transaction = await prisma.transaction.create({
      data: {
        ...data,
        userId: req.user.userId,
        date: new Date(data.date),
      },
    });

    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, startDate, endDate } = req.query;

    const skip = (Number(page) - 1) * Number(limit);
    const filters = {
      userId: req.user.userId,
    };
    if (startDate || endDate) {
      filters.date = {};

      if (startDate) {
        filters.date.gte = new Date(startDate);
      }

      if (endDate) {
        filters.date.lte = new Date(endDate);
      }
    }

    const transactions = await prisma.transaction.findMany({
      where: filters,
      skip,
      take: Number(limit),
      orderBy: { date: "desc" },
    });

    const total = await prisma.transaction.count({
      where: filters,
    });

    res.json({
      data: transactions,
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
    });
  } catch (err) {
    next(err);
  }
};
export const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = transactionSchema.partial().parse(req.body);
    const updated = await prisma.transaction.update({
      where: { id, userId: req.user.userId },
      data: {
        ...data,
        date: data.date ? new Date(data.date) : undefined,
      },
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.transaction.delete({
      where: { id, userId: req.user.userId },
    });

    res.json({ message: "Transaction deleted" });
  } catch (error) {
    next(error);
  }
};
