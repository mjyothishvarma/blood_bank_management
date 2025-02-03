const express = require('express');
const {ScheduleModel} = require('../../models/donorModel');
const updatedoctorrouter = express.Router();


updatedoctorrouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { doctor } = req.body;

  try {
    const updatedSchedule = await ScheduleModel.findByIdAndUpdate(
      id,  
      { doctor }, 
      { new: true }
    );

    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.json(updatedSchedule); 
  } catch (error) {
    console.error('Error updating doctor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = updatedoctorrouter;
