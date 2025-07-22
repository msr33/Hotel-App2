
// models/listing.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image:  String,
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("NewListing", listingSchema);
module.exports = Listing;