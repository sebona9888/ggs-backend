import express from "express";
import { createRental, getRentals } from "../controllers/rentalController";

const router = express.Router();

// POST - submit rental request
router.post("/", createRental);

// GET - admin view rentals
router.get("/", getRentals);

export default router;