const express = require('express');
const {DonorModel} = require('../../models/donorModel');
const donorcountrouter = express.Router();

donorcountrouter.get('/', async (req, res) => {
  try {
    const donorCount = await DonorModel.countDocuments();
    res.status(200).json({ donorCount });
  } catch (error) {
    console.error('Error fetching donor count:', error);
    res.status(500).json({ message: 'Error fetching donor count' });
  }
});

module.exports = donorcountrouter;
