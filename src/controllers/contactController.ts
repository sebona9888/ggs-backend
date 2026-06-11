import { Request, Response } from "express";
import Contact from "../models/Contact";
import { sendEmail } from "../utils/sendEmail";

export const createContact = async (
    req: Request,
    res: Response
) => {
    const data = await Contact.create(req.body);

    await sendEmail(
        "New Contact Form Submission",
        `
Name: ${req.body.fullName}
Email: ${req.body.email}
Phone: ${req.body.phone}
Message: ${req.body.message}
`
    );

    res.status(201).json(data);
};