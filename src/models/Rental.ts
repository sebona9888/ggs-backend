import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema(
    {
        customerName: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        machineName: {
            type: String,
            required: true,
            trim: true
        },
        requestDetails: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Rental", rentalSchema);