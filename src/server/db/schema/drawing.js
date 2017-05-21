const mongoose = require('mongoose');

const drawing = mongoose.Schema({
  word: String,
  countrycode: String,
  timestamp: Date,
  recognized: Boolean,
  key_id: { type: String, unique: true },
  drawing: []
});

module.exports = drawing;
