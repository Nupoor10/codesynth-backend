const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4040;

connectDB();

app.use("/api/v1/users", userRoutes);

app.get("/", (req,res) => {
    res.send("Welcome to codesynth backend!!");
})

app.listen(PORT, () => {
    console.log(`Successfully started port at : ${PORT}`);
})