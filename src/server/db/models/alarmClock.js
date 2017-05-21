const mongoose = require('mongoose');
const drawingSchema = require('../schema').drawing;

const AlarmClock = mongoose.model('alarm_clock', drawingSchema);

module.exports = AlarmClock;
