const mongoose = require("mongoose")
const categoryschema = new mongoose.Schema({ //A Schema defines the structure of data stored in MongoDB.
  category_name: {type: String, required: true},
  category_description: {type: String, required: true}
})

module.exports = mongoose.model("Category",categoryschema)