const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.TOKEN_SECRET;

const authMiddleware = (req, res, next) => {
    try {
        console.log(req.body)
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized - Missing Token"
            });
        }

        const decodedToken = jwt.verify(token, secret);
        if (!decodedToken || !decodedToken.data) {
            return res.status(401).json({
                message: 'Unauthorized - Invalid token'
            });
        }
        
        req.user = decodedToken.data;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Error in authorization"
        });
    }
};

module.exports = authMiddleware;
