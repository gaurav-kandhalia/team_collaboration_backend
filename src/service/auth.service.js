const authRepository = require('../repositories/auth.repository.js')
const bcrypt = require('bcrypt');
const ApiError = require('../utils/ApiError.js');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateJWT.js');
const jwt = require('jsonwebtoken');
const {createUserSession} = require('../repositories/session.repository.js')

const registerUser = async ({ name, email, password }) => {
  const existingUser = await authRepository.findByEmail(email);

  if (existingUser) {

    throw new ApiError({ statusCode: 400, message: 'Email already exists', errors: [] });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await authRepository.createUser({ name, email, password: hashedPassword });
  return newUser;
}

const loginUser = async ({ email, password,deviceInfo }) => {
  const existingUser = await authRepository.findByEmail(email);

  if (!existingUser) {
    throw new ApiError({ statusCode: 401, message: 'Invalid email or password', errors: [] });
  }
  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch) {
    throw new ApiError({ statusCode: 401, message: 'Invalid email or password', errors: [] });
  }

  const { password: _, ...user } = existingUser;

  const accessToken = generateAccessToken({ userId: user.id });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const decodedRefreshToken = jwt.decode(refreshToken);


  const expiresAt = new Date(decodedRefreshToken.exp * 1000); // Convert to milliseconds
  
  console.log('Refresh Token Expiration Date:', expiresAt);
  const hashedRefreshToken = await bcrypt.hash(refreshToken,10);



   console.log("userId:", user.id);
   console.log("hashedRefreshToken:", hashedRefreshToken);
   console.log("expiresAt:", expiresAt);
   console.log("deviceInfo:", deviceInfo);
  await createUserSession({
     userId: user.id, 
     hashedRefreshToken, 
     expiresAt, 
     deviceInfo });

  return { ...user, accessToken,refreshToken };
};

module.exports = {
  registerUser,
  loginUser
};