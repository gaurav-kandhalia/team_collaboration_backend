const authRepository = require('../repositories/auth.repository.js')
const bcrypt = require('bcrypt');

const registerUser = async ({ name, email, password }) => {
    const existingUser = await authRepository.findByEmail(email);

    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authRepository.createUser({ name, email, password: hashedPassword });
    return newUser;
}