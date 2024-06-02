const mongoose = require('mongoose');

const papelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  recycleDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('papel', papelSchema);  ''