const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['credit_card', 'debit_card', 'net_banking', 'upi']
  },
  transactionId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'completed', 'failed']
  }
});

module.exports = mongoose.model('Fee', feeSchema);