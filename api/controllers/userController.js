import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import {generateToken, deleteToken} from '../utils/generateToken.js';

// register user
// POST
// /register

const secret = 'asdfghjkl'

const registerUser = asyncHandler(async (req, res) => {

    //take the input fields from client
    const { username, email, profileImage ,password, confirmPassword } = req.body;

    //validate
    if (password !== confirmPassword) {
        res.status(400).json({message:'Passwords do not match'})
        
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400).json({message:'User Already Exists'})
        
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword, 
            profileImage
        });
        res.status(201).json({ username, email, profileImage });
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
    
    const {username, password} = req.body;
    const user = await User.findOne({ username })
    if(user && (await bcrypt.compare(password, user.password))){

        generateToken(res, username);
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            profileImage:user.profileImage
        })
       
    } else {
        res.status(400).json({message:'Invalid Credentials'})
        
    }
    
});

// get user profile
// GET
// /profile

const profileUser = asyncHandler(async (req, res) => {
    const { token } = req.cookies;
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        const username = decoded.username;
        const user = await User.findOne({ username });

        if (user) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});


// logout 
// POST
const logoutUser = asyncHandler(async (req, res) => {
    try {
        deleteToken(res); // This should clear the token
        res.status(200).json({ message: 'Logout successful' }); // Respond to client
    } catch (error) {
        console.error('Logout failed:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const createPost = asyncHandler(async (req,res)=>{
    console.log(req);
})
export { registerUser,loginUser, profileUser, logoutUser, createPost };