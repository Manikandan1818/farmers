import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// MondoDBConnection
const connect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to Database...");
    })
    .catch((err) => console.log(err));

app.post("/signup", authRoutes);
app.post("/signin", authRoutes);

// Error Handeling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    sucessful: false,
    status,
    message,
  });
});

// ServerConnection & DB
app.listen(8080, () => {
  connect();
  console.log("Connected to Server");
});
