import { Router } from "express";
import { getUser, getCurrentUser, getUsers } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getUsers);
router.get("/me", authMiddleware, getCurrentUser);
router.get("/:id", authMiddleware, getUser);

export default router;
