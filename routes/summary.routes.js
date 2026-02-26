import { Router } from "express";
import { getSummary } from "../controllers/summary.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = Router();

router.get("/", authMiddleware, getSummary);

export default router;
