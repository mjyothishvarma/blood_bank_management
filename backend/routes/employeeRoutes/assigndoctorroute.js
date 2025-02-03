const express = require('express');
const {ScheduleModel} = require('../../models/donorModel'); 
const assigndoctorrouter = express.Router();


assigndoctorrouter.get('/', async (req, res) => {
  try {
    const schedules = await ScheduleModel.find();
    res.json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = assigndoctorrouter;