import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";

export const createAdmin = async (
    req: Request,
    res: Response
) => {
    try {
        const existingAdmin = await Admin.findOne({
            email: "admin@gmail.com",
        });

        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(
            "admin123",
            10
        );

        const admin = await Admin.create({
            email: "admin@gmail.com",
            password: hashedPassword,
        });

        res.status(201).json({
            message: "Admin created successfully",
            admin,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};

export const loginAdmin = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const match = await bcrypt.compare(
            password,
            admin.password
        );

        if (!match) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            token,
            admin: {
                id: admin._id,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};