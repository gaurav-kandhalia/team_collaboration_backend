

const ApiError = require("../utils/apiError");
const {findById} = require("../repositories/auth.repository")


const findUserById = async (userId) => {
    const user = await findById(userId);
    return user;
};

module.exports = {
    findUserById
};
