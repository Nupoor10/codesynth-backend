const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/connectDB");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4040;

connectDB();

app.get("/", (req,res) => {
    res.send("Welcome to codesynth backend!!");
})

app.listen(PORT, () => {
    console.log(`Successfully started port at : ${PORT}`);
})