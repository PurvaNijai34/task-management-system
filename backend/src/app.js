

import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import User from "./models/User.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);


app.use(express.json());
app.use(cookieParser());

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Management API Running",
  });
});



// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);



app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


app.use(errorMiddleware);

export default app;