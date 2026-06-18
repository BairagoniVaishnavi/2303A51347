import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notificationRoutes from "./routes/notificationRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Notification Backend Running"
    });
});

app.use("/notifications", notificationRoutes);

export default app;