import { Request, Response } from "express";
import Team from "../models/Team";

// CREATE TEAM MEMBER
export const createTeamMember = async (req: Request, res: Response) => {
    try {
        const member = await Team.create(req.body);

        res.status(201).json({
            success: true,
            message: "Team member created successfully",
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// GET ALL TEAM MEMBERS
export const getTeamMembers = async (_req: Request, res: Response) => {
    try {
        const members = await Team.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// GET ONE MEMBER
export const getTeamMember = async (req: Request, res: Response) => {
    try {
        const member = await Team.findById(req.params.id);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Team member not found"
            });
        }

        res.status(200).json({
            success: true,
            data: member
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// UPDATE MEMBER
export const updateTeamMember = async (req: Request, res: Response) => {
    try {
        const updated = await Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Team member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Team member updated successfully",
            data: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// DELETE MEMBER
export const deleteTeamMember = async (req: Request, res: Response) => {
    try {
        const deleted = await Team.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Team member not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Team member deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};