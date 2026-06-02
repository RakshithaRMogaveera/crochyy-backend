const producttable = require("../Models/ProductModel");


// ✅ ADD PRODUCT
const addproduct = async (req, res) => {
  try {
    const {
      productname,
      productprice,
      pquantity,
      pdescription,
      category
    } = req.body;

    const pimage = req.file ? req.file.filename : "";

    const productdetails = new producttable({
      productname,
      productprice,
      pquantity,
      pdescription,
      category: category ? category.toLowerCase() : "",
      productimage: pimage
    });

    await productdetails.save();

    res.status(201).json({
      message: "Product added successfully",
      data: productdetails
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error
    });
  }
};



// ✅ GET ALL PRODUCTS
const getproducts = async (req, res) => {
  try {
    const products = await producttable.find();

    res.status(200).json({
      products
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error
    });
  }
};



// ✅ UPDATE PRODUCT
const updateproduct = async (req, res) => {
  try {
    const id = req.params.rowid;

    const product = await producttable.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.productname = req.body.productname;
    product.productprice = req.body.productprice;
    product.pquantity = req.body.pquantity;
    product.pdescription = req.body.pdescription;
    product.category = req.body.category
      ? req.body.category.toLowerCase()
      : product.category;

    if (req.file) {
      product.productimage = req.file.filename;
    }

    await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      data: product
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error
    });
  }
};



// ✅ DELETE PRODUCT (NEW 🔥)
const deleteproduct = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await producttable.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      error
    });
  }
};



// ✅ GET SINGLE PRODUCT
const getProductById = async (req, res) => {
  try {
    const product = await producttable.findById(req.params.id);

    res.status(200).json({
      product
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching product",
      error
    });
  }
};



// ✅ EXPORTS
module.exports = {
  addproduct,
  getproducts,
  updateproduct,
  deleteproduct,   // 🔥 added
  getProductById
};