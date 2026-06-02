const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  productname: { type: String },
  productprice: { type: Number },
  pquantity: { type: Number },
  pdescription: { type: String },

  // ✅ THIS IS IMPORTANT
  category: { type: String },   // ← ADD THIS

  productimage: { type: String }
});

module.exports = mongoose.model("Product", productschema);