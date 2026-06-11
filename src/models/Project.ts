import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "ongoing" // ongoing | completed | planned
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

export default mongoose.model("Project", projectSchema);