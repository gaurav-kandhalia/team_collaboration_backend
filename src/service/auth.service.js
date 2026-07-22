const authRepository = require('../repositories/auth.repository.js')
const bcrypt = require('bcrypt');
const ApiError = require('../utils/ApiError.js');
const { generateAccessToken } = require('../utils/generateJWT.js');

const registerUser = async ({ name, email, password }) => {
    const existingUser = await authRepository.findByEmail(email);

    if (existingUser) {
        throw new ApiError('User already exists',401);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authRepository.createUser({ name, email, password: hashedPassword });
    return newUser;
}

const loginUser = async ({ email, password }) => {
      const existingUser = await authRepository.findByEmail(email);

      if(!existingUser) {
        throw new ApiError('Invalid email or password', 401);
      }
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        throw new ApiError('Invalid email or password', 401);
      }

       const {password :_, ...user} = existingUser;

      const accessToken = generateAccessToken({ userId: user.id });

      return { ...user, accessToken };
};

module.exports = {
    registerUser,
    loginUser
};