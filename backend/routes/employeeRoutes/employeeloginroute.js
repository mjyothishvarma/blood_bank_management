const express = require('express');
const EmployeeData = require('../../models/employeeModel'); 
const employeeloginrouter = express.Router();

employeeloginrouter.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    const employee = await EmployeeData.findOne({ username });
    
    if (!employee) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    if (employee.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({ success: true, message: 'Login successful',employee: {username : employee.username} });
  } catch (err) {
    console.error('Error in login route:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = employeeloginrouter;
