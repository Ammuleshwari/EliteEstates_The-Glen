const express = require('express');
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  const listings = await Listing.find().populate('host', 'name');
  res.json(listings);
});

router.get('/:id', async (req, res) => {
  const listing = await Listing.findById(req.params.id).populate('host', 'name');
  res.json(listing);
});

router.post('/', auth, async (req, res) => {
  const listing = new Listing({ ...req.body, host: req.user.id });
  await listing.save();
  res.status(201).json(listing);
});

router.put('/:id', auth, async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(listing);
});

router.delete('/:id', auth, async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
