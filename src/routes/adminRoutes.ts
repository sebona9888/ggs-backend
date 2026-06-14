import express from "express";
import {
    loginAdmin,
    createAdmin,
} from "../controllers/adminController";

const router = express.Router();

router.post("/create-admin", createAdmin);
router.post("/login", loginAdmin);

export default router;