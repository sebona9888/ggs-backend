import express from "express";
import Job from "../models/Job";

const router = express.Router();

// CREATE JOB
router.post("/", async (req, res) => {
    const job = await Job.create(req.body);
    res.json(job);
});

// GET JOBS
router.get("/", async (_req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

export default router;