import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// MondoDBConnection
const connect = () =>
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to Database...");
    })
    .catch((err) => console.log(err));

// ServerConnection & DB
app.listen(8080, () => {
  connect();
  console.log("Connected to Server");
});
