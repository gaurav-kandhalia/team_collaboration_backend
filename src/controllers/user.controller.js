const ApiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const myProfile = asyncHandler(async(req,res)=>{
    const user = req.user;
    return res.status(200).json(new ApiResponse({
        statusCode: 200,
        message: 'User profile fetched successfully',
        data: user
    }))
})

module.exports = {
    myProfile
}