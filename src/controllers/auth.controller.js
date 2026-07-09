
const { registerUser } = require('../service/auth.service');
const ApiResopnse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');

const register = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password
    } = req.validatedData;
    const newUser = await registerUser({
        name,
        email,
        password
    });
    return res.status(201)
        .json(
            new ApiResopnse({
                statusCode : 201,
                message: 'User registered successfully',
                data: newUser
            })
        )
}
);

module.exports = {
    register
};


