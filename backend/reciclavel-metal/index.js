const express = require('express');
const mongoose = require('mongoose');
const metalRoutes = require('./routes/metalRoutes');
const connect = require('../db/Connect');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.use('/', metalRoutes);

connect();

