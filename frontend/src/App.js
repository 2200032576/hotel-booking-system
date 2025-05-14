
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ customerName: '', roomNumber: '', fromDate: '', toDate: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/rooms').then(res => setRooms(res.data));
  }, []);

  const bookRoom = () => {
    axios.post('http://localhost:5000/book', form).then(() => alert('Room booked'));
  };

  return (
    <div>
      <h2>Hotel Booking</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.number}>
            Room {room.number} ({room.type}) - ${room.price} - {room.available ? 'Available' : 'Booked'}
          </li>
        ))}
      </ul>

      <h3>Book a Room</h3>
      <input placeholder="Name" onChange={e => setForm({ ...form, customerName: e.target.value })} /><br />
      <input placeholder="Room Number" onChange={e => setForm({ ...form, roomNumber: e.target.value })} /><br />
      <input placeholder="From Date" onChange={e => setForm({ ...form, fromDate: e.target.value })} /><br />
      <input placeholder="To Date" onChange={e => setForm({ ...form, toDate: e.target.value })} /><br />
      <button onClick={bookRoom}>Book</button>
    </div>
  );
}

export default App;
