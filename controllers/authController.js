const bcrypt = require('bcryptjs');
const db = require('../models/db');

// REGISTER Controller
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    // Check for missing fields
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Insert User into the database
        const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error('Database error:', err); // <-- Log error
                return res.status(500).json({ error: err.message || 'Internal Server Error' });
            }

            res.status(201).json({
                message: 'User registered successfully',
                userId: result.insertId
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};