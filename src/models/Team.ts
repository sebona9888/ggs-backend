import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        role: {
            type: String,
            required: true,
            trim: true
        },
        bio: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false,
            trim: true
        },
        phone: {
            type: String,
            required: false,
            trim: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Team", teamSchema);