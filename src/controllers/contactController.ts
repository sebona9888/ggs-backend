import { Request, Response } from "express";
import Contact from "../models/Contact";
import { sendEmail } from "../utils/sendEmail";

// ✅ CREATE CONTACT
export const createContact = async (req: Request, res: Response) => {
    try {
        const data = await Contact.create(req.body);

        await sendEmail(
            "New Contact Form Submission",
            `Name: ${req.body.fullName}
Email: ${req.body.email}
Phone: ${req.body.phone}
Message: ${req.body.message}`
        );

        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating contact",
            error
        });
    }
};

// ✅ GET ALL CONTACTS (THIS FIXES YOUR ERROR)
export const getContacts = async (req: Request, res: Response) => {
    try {
        const data = await Contact.find();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching contacts",
            error
        });
    }
};