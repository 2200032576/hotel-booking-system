
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  number: Number,
  type: String,
  price: Number,
  available: Boolean
});

module.exports = mongoose.model('Room', RoomSchema);
