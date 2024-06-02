const mongoose = require('mongoose');

const vidroSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  recycleDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('vidro', vidroSchema);  ''