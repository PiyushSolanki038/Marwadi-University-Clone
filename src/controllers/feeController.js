const Fee = require('../models/Fee');

exports.submitFeePayment = async (req, res) => {
  try {
    const newFeePayment = new Fee(req.body);
    const savedPayment = await newFeePayment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFeeHistory = async (req, res) => {
  try {
    const { studentId } = req.params;
    const feeHistory = await Fee.find({ studentId }).sort({ paymentDate: -1 });
    res.status(200).json(feeHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};