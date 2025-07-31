import express from 'express';
import { authenticateToken } from '../../middleware/token-middleware.js';
import { contactController } from '../../controller/contact/contactController.js';

const router = express.Router();

// Route to submit a contact message
router.post('/', contactController.submitContact);

// Route to get all contact messages (admin only)
router.get('/', contactController.getAllContacts);

export { router as contactRouter };