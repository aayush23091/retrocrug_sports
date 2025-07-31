import express from "express";
import { contactController } from "../../controller/contact/contactController.js";

const router = express.Router();

// Public route for submitting contact messages
router.post("/", contactController.submitContact);

// Admin route for getting all contact messages
// This is protected at the app level in index.js
router.get("/", contactController.getAllContacts);

export { router as contactRouter };