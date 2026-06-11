import mongoose from "mongoose";

const machineSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
        },

        image: {
            type: String,
        },

        category: {
            type: String,
            default: "construction-machine",
        },

        pricePerDay: {
            type: Number,
            required: true,
        },

        location: {
            type: String,
        },

        status: {
            type: String,
            enum: ["available", "rented", "maintenance"],
            default: "available",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Machine", machineSchema);