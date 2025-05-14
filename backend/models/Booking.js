
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerName: String,
  roomNumber: Number,
  fromDate: String,
  toDate: String
});

module.exports = mongoose.model('Booking', BookingSchema);
