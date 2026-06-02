const Bookingtable = require('../Models/Booking_Model')

// ✅ CREATE BOOKING
const Createbooking = async (req, res) => {
  try {
    const { fname, email, phone, address, quantity, productId } = req.body;

    console.log("BODY 👉", req.body);

    const newbooking = new Bookingtable({
      fullname: fname,
      email,
      phone,
      address,
      quantity: Number(quantity),
      productId,
      price
    });

    const savebooking = await newbooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      bdata: savebooking
    });

  } catch (error) {
    console.log("🔥 BACKEND ERROR 👉", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET BOOKINGS (you were missing this)
const getBooking = async (req, res) => {
  try {
    const data = await Bookingtable.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};

module.exports = { Createbooking, getBooking };