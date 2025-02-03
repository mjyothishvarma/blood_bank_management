const express = require('express');
const {ScheduleModel} = require('../../models/donorModel');
const assigneddonorsrouter = express.Router();

assigneddonorsrouter.get('/', async (req, res) => {
  const username = req.query.username; 

  try {
   
    const patients = await ScheduleModel.find({ doctor: username });

    if (patients.length === 0) {
      return res.status(404).json({ message: 'No patients found for this doctor' });
    }

    res.json(patients); 
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = assigneddonorsrouter;
