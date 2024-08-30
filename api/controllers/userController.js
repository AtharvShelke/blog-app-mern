import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';

// register user
// POST
// /register

const secret = 'asdfghjkl'

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
        console.error('Error during user registration:', error); 
        res.status(400).json({ message: 'User registration not successful', error: error.message });

    }

}
)

// Login User
// POST 
// /login
const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email })
    if(user && (await bcrypt.compare(password, user.password))){
        
       res.status(201).json({
        _id:user._id,
        email:user.email,
        username:user.username,
        token:generateToken(user._id)
       });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});


export { registerUser,loginUser };