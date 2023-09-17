import express from "express";
import "dotenv/config";
import cors from "cors";
import {
  createWorkController,
  getWorkController,
  updateWorkController,
} from "./src/controllers/WorksController.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = process.env.PORT;
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.get("/work", getWorkController);
app.post("/work", createWorkController);
app.patch("/work/:id", updateWorkController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
