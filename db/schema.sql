CREATE DATABASE delta_coaches;
USE delta_coaches;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    from_location VARCHAR(100),
    to_location VARCHAR(100),
    travel_date DATE,
    seats TEXT,
    total_amount DECIMAL(10, 2),
    payment_status ENUM('pending', 'paid') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);