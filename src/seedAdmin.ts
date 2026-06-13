import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/Admin";

dotenv.config();

async function createAdmin() {
    await mongoose.connect(
        process.env.MONGO_URI as string
    );

    const hashedPassword =
        await bcrypt.hash("admin123", 10);

    await Admin.create({
        email: "admin@example.com",
        password: hashedPassword,
    });

    console.log("Admin Created");
    process.exit();
}

createAdmin();