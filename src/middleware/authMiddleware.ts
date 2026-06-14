import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// extend Request type (better than any)
interface AuthRequest extends Request {
    user?: string | jwt.JwtPayload;
}

export const protect = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Not authorized",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        req.user = decoded; // now typed properly

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
};