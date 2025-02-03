const mongoose = require('mongoose')
const HospPaymentSchema = new mongoose.Schema({
    HospitalName: { type: String, required: true },
    bloodType: { type: String, required: true },
    contactNumber: { type: String, required: true },
    requiredUnits: { type: Number, required: true },
    urgencyLevel: { type: String, required: true },
    dateNeeded: { type: Date, required: true },
    additionalInfo: { type: String },
    
  }, { timestamps: true });
  
  module.exports = mongoose.model('HospPayment', HospPaymentSchema);