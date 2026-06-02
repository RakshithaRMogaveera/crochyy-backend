const express = require("express");
const router = express.Router();

const {
  addproduct,
  getproducts,
  updateproduct,
  getProductById
} = require("../Controller/ProductController");

const upload = require("../Middleware/imageupload");

// ADD PRODUCT
router.post("/addproduct", upload.single("productimage"), addproduct);

// GET ALL PRODUCTS
router.get("/getproducts", getproducts);

// UPDATE PRODUCT
router.put("/updateproduct/:rowid", upload.single("productimage"), updateproduct);

// GET SINGLE PRODUCT
router.get("/getproduct/:id", getProductById);

module.exports = router;