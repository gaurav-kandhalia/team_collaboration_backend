const jwt = require("jsonwebtoken");
const ApiError = require("./ApiError");

function generateAccessToken(payload) {

    if(payload==null){
        throw new ApiError ("Payload is required to generate access token", 400);
    }
    return jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
}


function generateRefreshToken(payload) {

    if(payload==null){
        throw new ApiError ("Payload is required to generate refresh token", 400);
    }
    return jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
};