import express from "express";
import { contactController } from "../../controller/contact/contactController.js";

const router = express.Router();

// Public route - anyone can submit a contact message
router.post("/", contactController.createMessage);

// Protected routes - only admin can access these
router.get("/", contactController.getAllMessages);
router.get("/:id", contactController.getMessageById);
router.put("/:id/read", contactController.markAsRead);
router.delete("/:id", contactController.deleteMessage);

export { router as contactRouter };