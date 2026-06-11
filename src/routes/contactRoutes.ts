import express from "express";
import { createContact, getContacts } from "../controllers/contactController";

const router = express.Router();

// POST - submit form
router.post("/", createContact);

// GET - admin view messages
router.get("/", getContacts);

export default router;