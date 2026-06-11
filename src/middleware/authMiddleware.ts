import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Not authorized",
            });
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        next();
    } catch {
        res.status(401).json({
            message: "Invalid token",
        });
    }
};