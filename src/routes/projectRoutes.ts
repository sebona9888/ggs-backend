import express from "express";
import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/projectController";

const router = express.Router();

// CREATE
router.post("/", createProject);

// READ ALL
router.get("/", getProjects);

// READ ONE
router.get("/:id", getProjectById);

// UPDATE
router.put("/:id", updateProject);

// DELETE
router.delete("/:id", deleteProject);

export default router;