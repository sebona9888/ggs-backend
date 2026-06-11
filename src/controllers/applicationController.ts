import { Request, Response } from "express";
import Application from "../models/Application";
import cloudinary from "../config/cloudinary";
import streamifier from "streamifier";

/**
 * APPLY FOR JOB (CV UPLOAD)
 */
export const applyJob = async (req: Request, res: Response) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "CV file is required"
            });
        }

        const uploadStream = cloudinary.uploader.upload_stream(
            {
                resource_type: "raw",
                folder: "ggs-cv"
            },
            async (error, result) => {
                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Cloudinary upload failed",
                        error
                    });
                }

                const application = await Application.create({
                    jobId: req.body.jobId,
                    fullName: req.body.fullName,
                    email: req.body.email,
                    phone: req.body.phone,
                    coverLetter: req.body.coverLetter,
                    cvUrl: result?.secure_url
                });

                return res.status(201).json({
                    success: true,
                    message: "Application submitted successfully",
                    data: application
                });
            }
        );

        streamifier.createReadStream(file.buffer).pipe(uploadStream);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

/**
 * GET ALL APPLICATIONS (ADMIN)
 */
export const getApplications = async (_req: Request, res: Response) => {
    try {
        const applications = await Application.find()
            .populate("jobId")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: applications
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch applications",
            error
        });
    }
};