
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/hotel_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Room = require('./models/Room');
const Booking = require('./models/Booking');

// Routes
app.get('/rooms', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});

app.post('/book', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  await Room.updateOne({ number: req.body.roomNumber }, { $set: { available: false } });
  res.send('Room booked');
});

app.get('/bookings', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

app.post('/add-room', async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.send('Room added');
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
