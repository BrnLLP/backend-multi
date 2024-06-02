const express = require('express');
const mongoose = require('mongoose');
const vidroRoutes = require('./routes/vidroRoutes');

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(express.json());

// Routes
app.use('/vidro', vidroRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://devcloud:devcloud@cluster0.xgbzj7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Serviço de de reciclagem de vidro rodando na porta: ${PORT}`);
    });
  })
  .catch(err => console.error('Error ao conectar ao banco de dados:', err));