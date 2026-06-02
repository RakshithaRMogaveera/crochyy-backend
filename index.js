const express = require('express');
const dbconnection = require('./db');
const cors = require('cors');
const path = require('path');

const app = express();

const PORTNUMBER = 7000;

// DATABASE CONNECTION
dbconnection();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// STATIC FOLDER FOR IMAGES
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// ROUTES
app.use('/user', require('./Routes/UserRoutes'));
app.use('/product', require('./Routes/ProductRoutes'));
app.use('/category', require('./Routes/category_routes'));
app.use('/booking', require('./Routes/booking_route'));

// TEST API
app.get('/apitest', (req, res) => {
    res.send("Hello from express");
});

// SERVER
app.listen(PORTNUMBER, () => {
    console.log(`server is running on portnumber:${PORTNUMBER}`);
});