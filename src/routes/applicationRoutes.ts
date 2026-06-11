import express from "express";
import upload from "../middleware/upload";
import { applyJob, getApplications } from "../controllers/applicationController";

const router = express.Router();

router.post("/", upload.single("cv"), applyJob);
router.get("/", getApplications);

export default router;