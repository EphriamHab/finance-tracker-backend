import { z } from "zod";

export const transactionSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(["income", "expense"]),
  category: z.string(),
  description: z.string(),
  date: z.string(),
});
