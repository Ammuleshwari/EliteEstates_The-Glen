const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const booking = new Booking({ ...req.body, user: req.user.id });
  await booking.save();
  res.status(201).json(booking);
});

module.exports = router;
