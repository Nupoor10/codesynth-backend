const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.TOKEN_SECRET;

const generateJwtToken = (userId) => {
    return jwt.sign({
        data: userId
    }, secret , { expiresIn: '30d' });
}

module.exports = generateJwtToken;
