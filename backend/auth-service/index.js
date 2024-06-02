const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://devcloud:devcloud@cluster0.xgbzj7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Authentication service running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));