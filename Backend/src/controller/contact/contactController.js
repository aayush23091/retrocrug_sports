import { ContactMessage } from '../../models/index.js';

/**
 * Create a new contact message
 */
const createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    
    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Create new contact message
    const contactMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      message
    });
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully', 
      data: contactMessage 
    });
  } catch (error) {
    console.error('Error creating contact message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};

/**
 * Get all contact messages (for admin)
 */
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.findAll({
      order: [['createdAt', 'DESC']]
    });
    
    res.status(200).json({ 
      success: true, 
      data: messages 
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

/**
 * Get a single contact message by ID
 */
const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const message = await ContactMessage.findByPk(id);
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    res.status(200).json({ 
      success: true, 
      data: message 
    });
  } catch (error) {
    console.error('Error fetching contact message:', error);
    res.status(500).json({ error: 'Failed to fetch message' });
  }
};

/**
 * Mark a message as read
 */
const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    
    const message = await ContactMessage.findByPk(id);
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    message.isRead = true;
    await message.save();
    
    res.status(200).json({ 
      success: true, 
      message: 'Message marked as read', 
      data: message 
    });
  } catch (error) {
    console.error('Error marking message as read:', error);
    res.status(500).json({ error: 'Failed to update message' });
  }
};

/**
 * Delete a contact message
 */
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    
    const message = await ContactMessage.findByPk(id);
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    
    await message.destroy();
    
    res.status(200).json({ 
      success: true, 
      message: 'Message deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting contact message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

export const contactController = {
  createMessage,
  getAllMessages,
  getMessageById,
  markAsRead,
  deleteMessage
};