const mongoose = require('mongoose');
const listingSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  images: [String],
  description: String,
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Listing', listingSchema);
