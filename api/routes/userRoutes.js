import express from 'express';
import { registerUser, loginUser, profileUser, logoutUser, createPost } from '../controllers/userController.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser); 
router.get('/profile', profileUser); 
router.post('/logout', logoutUser); 
router.post('/post', createPost);


export default router;