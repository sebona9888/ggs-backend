import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        coverLetter: {
            type: String
        },
        cvUrl: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);