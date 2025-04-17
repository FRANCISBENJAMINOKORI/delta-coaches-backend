const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

router.post('/', createBooking); // handles POST api/booking

module.exports = router;
