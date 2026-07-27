const {findUserById} = require('../service/user.service');
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const jwt = require('jsonwebtoken')


const authenticate  = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let accessToken ;
    

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new ApiError('Authorization header missing or malformed', 401);
    }

    const token = authHeader.split(' ')[1];
    if(!token) {
        throw new ApiError('unathorized request', 401);
    }
      
    

    try {

        
      
       accessToken  = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
       console.log("accessToken",accessToken)
        
    } catch (error) {
        throw new ApiError('Invalid or expired token', 401);
    }

    
    const userId = accessToken?.userId;
    if(!userId) {
        throw new ApiError('Invalid access token or token expired', 401);
    }

    const user = await findUserById(userId);
    console.log("user ",user)
    if(!user) {
        throw new ApiError('unauthorized request', 401);
    }
    req.user = user;
    next();
}
);
module.exports = {
    authenticate,
};