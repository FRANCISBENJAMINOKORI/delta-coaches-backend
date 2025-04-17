const db = require('../models/db');

exports.createBooking = async (req, res) => {
    try {
        const { user_id, from, to, seats, total_amount } = req.body;

        const seatString = seats.join(',');

        const sql = `
        INSERT INTO bookings
        (user_id, from_location, to_location, travel_date, seats, total_amount, payment_status)
        VALUES (?, ?, ?, ?, ?, ?, 'paid')
        `;
        
        db.query(sql, [user_id, from, to, date, seatString, total_amount], (err, result) => {
            if (err) return res.status(500).send(err.message);

            res.json({
                message: 'Booking Successful',
                bookingId: result.insertId
            });      
    });
} catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
}
};