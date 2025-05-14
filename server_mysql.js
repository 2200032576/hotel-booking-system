
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MySQL Workbench connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',     // e.g., 'root'
  password: 'your_mysql_password', // e.g., 'password'
  database: 'hotel_booking'
});

db.connect(err => {
  if (err) {
    console.error('Connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Get all rooms
app.get('/rooms', (req, res) => {
  db.query('SELECT * FROM rooms', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add a new room
app.post('/add-room', (req, res) => {
  const { number, type, price, available } = req.body;
  db.query(
    'INSERT INTO rooms (number, type, price, available) VALUES (?, ?, ?, ?)',
    [number, type, price, available],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.send('Room added');
    }
  );
});

// Book a room
app.post('/book', (req, res) => {
  const { customerName, roomNumber, fromDate, toDate } = req.body;
  db.query(
    'INSERT INTO bookings (customerName, roomNumber, fromDate, toDate) VALUES (?, ?, ?, ?)',
    [customerName, roomNumber, fromDate, toDate],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      // Mark room as unavailable
      db.query(
        'UPDATE rooms SET available = false WHERE number = ?',
        [roomNumber],
        (err2) => {
          if (err2) return res.status(500).json({ error: err2 });
          res.send('Room booked');
        }
      );
    }
  );
});

// Get all bookings
app.get('/bookings', (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
