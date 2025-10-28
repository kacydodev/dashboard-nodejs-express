import { signUp } from '#controllers/authController.js';
import express from 'express';

export const authRouter = express.Router();
authRouter.post('/signup', signUp);
// authRouter.post('/login', login);
