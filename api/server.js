import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port http://localhost:5000");
});
