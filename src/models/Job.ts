import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: "full-time"
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Job", jobSchema);