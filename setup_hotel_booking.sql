
-- Create database
CREATE DATABASE IF NOT EXISTS hotel_booking;
USE hotel_booking;

-- Create rooms table
CREATE TABLE IF NOT EXISTS rooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number INT NOT NULL,
    type VARCHAR(255),
    price DECIMAL(10, 2),
    available BOOLEAN
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerName VARCHAR(255),
    roomNumber INT,
    fromDate DATE,
    toDate DATE,
    FOREIGN KEY (roomNumber) REFERENCES rooms(number)
);
