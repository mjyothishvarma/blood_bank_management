const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password : {
    type: String,
    default: '1234',
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Government', 'Private'],
    required: true,
  },
  bloodbank_capacity: {
    type: Number,
    required: true,
  },
  establishedYear: {
    type: Number,
  },
});


module.exports = mongoose.model('Hospital', hospitalSchema);

