const express = require('express')
const route = express.Router()

const { Createbooking, getBooking } = require('../Controller/Booking_controller')

// ✅ ALWAYS use lowercase (important)
route.post("/createbooking", Createbooking)
route.get("/getbooking", getBooking)

module.exports = route