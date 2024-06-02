const express = require('express');
const mongoose = require('mongoose');
const papelRoutes = require('./routes/papelRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Routes
app.use('/papel', papelRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://devcloud:devcloud@cluster0.xgbzj7z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Serviço de de reciclagem de papel rodando na porta: ${PORT}`);
    });
  })
  .catch(err => console.error('Error ao conectar ao banco de dados:', err));