import express from "express";
import { createContact, getContacts } from "../controllers/contactController";

const router = express.Router();

// Create new contact (POST)
router.post("/", createContact);

// Get all contacts (GET)
router.get("/", getContacts);

export default router;