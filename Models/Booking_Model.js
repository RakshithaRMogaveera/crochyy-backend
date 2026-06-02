const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
  type: Number,
  required: true
},
  productId: {
    type: String, // ✅ FIX (was ObjectId → causing error)
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("booking", BookingSchema);