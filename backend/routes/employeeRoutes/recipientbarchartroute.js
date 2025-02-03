const express = require('express');
const Recipient = require('../../models/recipientportalmodel'); 
const recipientbarchartrouter = express.Router();

recipientbarchartrouter.get('/', async (req, res) => {
  try {
    const counts = await Recipient.aggregate([
      { $group: { _id: '$bloodType', count: { $sum: 1 } } }
    ]);
    res.json(counts);
  } catch (error) {
    console.error('Error fetching recipient counts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = recipientbarchartrouter;
