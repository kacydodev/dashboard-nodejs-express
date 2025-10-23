import express from 'express';
import { getAllStartups } from '../controllers/startupsController.js';

export const startupsRouter = express.Router();
// export const apiRouter = express.Router('/', getAllStartups);

startupsRouter.get('/', getAllStartups);
