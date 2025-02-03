const express = require('express');
const {DonorModel} = require('../../models/donorModel');
const donorpiechartrouter = express.Router();

donorpiechartrouter.get('/', async (req, res) => {
  try {
    const counts = await DonorModel.aggregate([
      { $group: { _id: '$bloodGroup', count: { $sum: 1 } } }
    ]);
    res.json(counts);
  } catch (error) {
    console.error('Error fetching recipient counts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = donorpiechartrouter;
