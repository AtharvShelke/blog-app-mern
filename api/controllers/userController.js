import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
// register user
// POST
// /register

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) { 
        res.status(400);
        throw new Error('Passwords do not match')
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User Already Exists");
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json({ username, email });
    } catch (error) {
        console.error('Error during user registration:', error); // Log the error for debugging
        res.status(400).json({ message: 'User registration not successful', error: error.message });
        
    }

}
)

export { registerUser };