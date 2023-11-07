const mongoose = require('mongoose');
require("dotenv").config();
const url = process.env.MONGO_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(url);
        console.log("Sucessfully connected to database");
    } catch(error) {
        console.log(`Error Occurred : ${err}`)
    }
}

module.exports = connectDB;