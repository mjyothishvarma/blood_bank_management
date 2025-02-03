const express = require('express');
const RecipientPortal = require('../../models/recipientportalmodel');
const recipientportalrouter = express.Router();

recipientportalrouter.post('/', async (req, res) => {
  try {
    const recipientFormSubmission = new RecipientPortal(req.body);
    await recipientFormSubmission.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully!' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = recipientportalrouter;
