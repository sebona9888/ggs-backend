import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";

export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // 1. find admin
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // 2. check password
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // 3. create token
        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        return res.json({
            message: "Login successful",
            token
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error"
        });
    }
};