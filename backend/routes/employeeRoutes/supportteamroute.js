const express = require('express');
const supportteamrouter = express.Router();
const Issue = require('../../models/supportteammodel');


supportteamrouter.post('/', async (req, res) => {
  const { name, email, userType, issue } = req.body;

  try {
    
    const newIssue = new Issue({
      name,
      email,
      userType,
      issue
    });

    await newIssue.save();

    res.status(200).json({ message: 'Issue submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting issue', error });
  }
});

module.exports = supportteamrouter;