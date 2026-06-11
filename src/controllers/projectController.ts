import { Request, Response } from "express";
import Project from "../models/Project";

// CREATE PROJECT
export const createProject = async (req: Request, res: Response) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            data: project
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// GET ALL PROJECTS
export const getProjects = async (_req: Request, res: Response) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: projects
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// GET SINGLE PROJECT
export const getProjectById = async (req: Request, res: Response) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            data: project
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// UPDATE PROJECT
export const updateProject = async (req: Request, res: Response) => {
    try {
        const updated = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
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

// DELETE PROJECT
export const deleteProject = async (req: Request, res: Response) => {
    try {
        const deleted = await Project.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Project not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};