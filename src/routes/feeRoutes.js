const express = require('express');
const router = express.Router();
const { submitFeePayment, getFeeHistory } = require('../controllers/feeController');

router.post('/submit', submitFeePayment);
router.get('/history/:studentId', getFeeHistory);

module.exports = router;