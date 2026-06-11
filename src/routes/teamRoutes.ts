import express from "express";
import {
    createTeamMember,
    getTeamMembers,
    getTeamMember,
    updateTeamMember,
    deleteTeamMember
} from "../controllers/teamController";

const router = express.Router();

// CREATE
router.post("/", createTeamMember);

// READ ALL
router.get("/", getTeamMembers);

// READ ONE
router.get("/:id", getTeamMember);

// UPDATE
router.put("/:id", updateTeamMember);

// DELETE
router.delete("/:id", deleteTeamMember);

export default router;