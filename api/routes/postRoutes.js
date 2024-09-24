import express from 'express';
import { createPost, getAllPost, getPost } from '../controllers/postController.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/', getAllPost);
router.get('/getPost/:id', getPost)
export default router;