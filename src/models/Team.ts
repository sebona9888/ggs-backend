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
        },
        // ADDED FIELDS TO MATCH FRONTEND PORTRAITS
        education: {
            type: String,
            required: false
        },
        experience: {
            type: String,
            required: false
        },
        skills: {
            type: [String], // Array of strings
            required: false,
            default: []
        },
        highlights: {
            type: [String], // Array of strings
            required: false,
            default: []
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Team", teamSchema);