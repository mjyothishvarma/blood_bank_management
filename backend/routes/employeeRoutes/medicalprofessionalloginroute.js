const express = require('express');
const MedicalProfessionalData = require('../../models/medicalprofessionalmodel'); 
const medicalprofessionalloginrouter = express.Router();

medicalprofessionalloginrouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const medicalprofessional = await MedicalProfessionalData.findOne({ username });
    
    if (!medicalprofessional) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    if (medicalprofessional.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({ success: true, message: 'Login successful',medicalprofessional: {username : medicalprofessional.username} });
  } catch (err) {
    console.error('Error in login route:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = medicalprofessionalloginrouter;
