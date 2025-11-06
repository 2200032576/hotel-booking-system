# 🏨 Hotel Booking Management System

![Hotel Booking Homepage](Hotel%20Bokking%20System%20home%20page%20output.png)

## 📘 Overview
The **Hotel Booking Management System** is a full-stack web application designed to simplify hotel room reservations and administration.  
Users can browse available rooms, make bookings, and manage their reservations, while admins can handle room inventory, pricing, and booking management.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript |
| **Backend** | Node.js, Express |
| **Database** | MySQL |
| **Libraries/Tools** | Axios, Bootstrap, REST API, Git & GitHub |

---

## ⚙️ Features

### 👤 User Module
- Register and log in securely  
- Search available rooms by date  
- Book and cancel reservations  
- View booking history  

### 🛠️ Admin Module
- Add, edit, or delete room listings  
- Manage customer bookings  
- Dashboard overview for rooms and customers  

---

## 🗂️ Folder Structure

hotel-booking-system/
│
├── backend/ # Node.js + Express backend
│ ├── server_mysql.js
│ └── setup_hotel_booking.sql
│
├── frontend/src/ # React frontend source code
│
├── Hotel Bokking System home page output.png
├── Hotel_Booking_System_README.pdf
├── README.md
└── .gitignore

## 🚀 Setup Instructions

### 1️⃣ Backend Setup
1. Go to the `backend` folder  
2. Import `setup_hotel_booking.sql` into MySQL  
3. Update database credentials in `server_mysql.js`  
4. Start the backend server:
   ```bash
   node server_mysql.js
Backend runs at: http://localhost:8080

2️⃣ Frontend Setup
Go to the frontend/src folder

Install dependencies and start the app:

bash
Copy code
npm install
npm start
Access the frontend at: http://localhost:3000

📸 UI Preview
Homepage	Booking Interface

🧠 Workflow
User interacts with React Frontend

Requests are processed by Express + Node.js Backend

Data is stored in MySQL Database

🏁 Future Enhancements
Payment gateway integration (Razorpay/Stripe)

Email booking confirmations

Cloud deployment on Render or Vercel

Analytics dashboard for admins

👨‍💻 Author
Ambati Jyothiraditya
🔗 GitHub: @2200032576

