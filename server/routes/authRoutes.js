import express from 'express';
import { registerOrLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', registerOrLogin);
router.post('/register', registerOrLogin);

export default router;