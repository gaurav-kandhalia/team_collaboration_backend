

const ApiError = require("../utils/apiError");
const {findById} = require("../repositories/auth.repository")


const findUserById = async (userId) => {
    console.log("user service")
    const user = await findById(userId);
    console.log("------------------user-------------------",user)
    return user;
};

module.exports = {
    findUserById
};
