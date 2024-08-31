import express from 'express';
import { registerUser, loginUser, profileUser } from '../controllers/userController.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser); 
router.get('/profile', profileUser); 



export default router;