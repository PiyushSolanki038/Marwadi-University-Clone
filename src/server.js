const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const feeRoutes = require('./routes/feeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/fees', feeRoutes);
app.use('/api/auth', authRoutes);

// Basic route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Marwadi University API' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});