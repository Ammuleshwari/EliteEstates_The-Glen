const mongoose = require('mongoose');
const Listing = require('../models/Listing');
mongoose.connect('mongodb://localhost:27017/realestate');

const seedListings = [
  { title: "Sea View Villa", location: "Goa", price: 10000, images: ["villa.jpg"], description: "Luxury villa" },
  { title: "Cozy Apartment", location: "Bangalore", price: 5000, images: ["apt.jpg"], description: "City view apartment" }
];

Listing.insertMany(seedListings).then(() => {
  console.log("Seeded");
  mongoose.disconnect();
});
