import express from "express";
import {
    loginAdmin,
    createAdmin,
    getMe,
} from "../controllers/adminController";

import { protect } from "../middleware/protect";

const router = express.Router();

/**
 * Public routes
 */
router.post("/create-admin", createAdmin);
router.post("/login", loginAdmin);

/**
 * Protected route
 */
router.get("/me", protect, getMe);

export default router;