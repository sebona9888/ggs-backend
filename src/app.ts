import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes";
import contactRoutes from "./routes/contactRoutes";
import rentalRoutes from "./routes/rentalRoutes";
import teamRoutes from "./routes/teamRoutes";
import jobRoutes from "./routes/jobRoutes";
import applicationRoutes from "./routes/applicationRoutes";
import adminRoutes from "./routes/adminRoutes";
import authRoutes from "./routes/authRoutes";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("GGS API Running");
});

// Projects route
app.use("/api/projects", projectRoutes);

// ✅ CONTACT ROUTE (THIS WAS MISSING)
app.use("/api/contacts", contactRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
export default app;