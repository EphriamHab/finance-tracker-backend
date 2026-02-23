import { Router } from "express";
import { getUser, getCurrentUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUsers);
router.get("/me", getCurrentUser);
router.get("/:id", getUser);

export default router;