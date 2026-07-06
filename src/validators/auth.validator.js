const {z} = require('zod');

const registerSchema = z.object({
    name : z.string().trim().min(3, {message: "Name must be at least 3 characters "}).max(100),
    email : z.string().trim().toLowerCase().email({message: "Invalid email address"}),
    password : z.string().min(8, {message: "Password must be at least 8 characters long"})
});

module.exports = {
    registerSchema
};