const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb://127.0.0.1:27017/mernbe';

const dbconnection = async () => {
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database:", error.message);
    }
};

module.exports = dbconnection;