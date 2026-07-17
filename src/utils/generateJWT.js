const jwt = require("jsonwebtoken");

function generateAccessToken(payload) {
    return jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
}

module.exports = {
    generateAccessToken,
};