const express = require('express');
const RecipientData = require('../../models/recipientportalmodel');
const recipientcountrouter = express.Router();

recipientcountrouter.get('/', async (req, res) => {
  try {
    const recipientCount = await RecipientData.countDocuments();
    res.status(200).json({ recipientCount });
  } catch (error) {
    console.error('Error fetching recipient count:', error);
    res.status(500).json({ message: 'Error fetching recipient count' });
  }
});

module.exports = recipientcountrouter;
