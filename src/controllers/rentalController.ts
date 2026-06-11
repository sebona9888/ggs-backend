import { Request, Response } from "express";
import Rental from "../models/Rental";
import { sendEmail } from "../utils/sendEmail";

// CREATE RENTAL REQUEST
export const createRental = async (req: Request, res: Response) => {
    try {
        const {
            customerName,
            phone,
            email,
            machineName,
            requestDetails
        } = req.body;

        const newRental = await Rental.create({
            customerName,
            phone,
            email,
            machineName,
            requestDetails
        });

        // Send email notification to admin
        await sendEmail(
            "New Rental Request",
            `
Customer Name: ${customerName}
Phone: ${phone}
Email: ${email}
Machine: ${machineName}

Request Details:
${requestDetails}
            `
        );

        res.status(201).json({
            success: true,
            message: "Rental request submitted successfully",
            data: newRental
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};

// GET ALL RENTAL REQUESTS (admin)
export const getRentals = async (_req: Request, res: Response) => {
    try {
        const rentals = await Rental.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: rentals
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error
        });
    }
};