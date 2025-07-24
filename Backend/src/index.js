
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // <-- import CORS
import { db } from "./database/index.js";
import { userRouter, authRouter } from "./route/index.js";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import router from "./route/uploadRoutes.js";
import { createUploadsFolder } from "./security/helper.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Enable CORS
app.use(cors());

// Parse JSON
app.use(bodyParser.json());

// Public routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

// Protect routes below
app.use(authenticateToken);
app.use("/api/file", router);

// Create uploads folder
createUploadsFolder();

// Start server
app.listen(port, function () {
  console.log(`Project running on port ${port}`);
  db();
});


