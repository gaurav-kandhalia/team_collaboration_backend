
const { registerUser,loginUser } = require('../service/auth.service');
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

const login = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.validatedData;

    const user = await loginUser({
        email,
        password
    });
    return res.status(200)
        .json(
            new ApiResopnse({
                statusCode : 200,
                message: 'User logged in successfully',
                data: user
            })
        )
}
);
   
    


module.exports = {
    register,login
};


