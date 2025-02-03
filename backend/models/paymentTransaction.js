const mongoose = require("mongoose");


const generateTransactionID = () => {
  return 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

const paymentTransactionSchema = new mongoose.Schema({
  transactionID: {
    type: String,
    required: true,
    unique: true,
    default: generateTransactionID, 
  },
  bloodType: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  bloodUnits: {
    type: Number,
    required: true,
    min: 1,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionStatus: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: function() {
      return this.hospitalID == null; 
    },
    default: null, 
  },
  hospitalID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital', 
    required: function() {
      return this.donor == null; 
    },
    default: null, 
  },
});

module.exports = mongoose.model('PaymentTransaction', paymentTransactionSchema);
