import express from 'express';
import { getAllStartups } from '../controllers/startupsController.js';
import { getGenres, getProducts } from '#controllers/productsController.js';

export const startupsRouter = express.Router();

startupsRouter.get('/', getAllStartups);

export const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.get('/genres', getGenres);
