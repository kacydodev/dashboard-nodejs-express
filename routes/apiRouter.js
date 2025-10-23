import express from 'express';
import { getAllStartups } from '../controllers/startupsController.js';

export const apiRouter = express.Router();

apiRouter.get('/', getAllStartups);
