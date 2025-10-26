import express from 'express';
import { productsRouter, startupsRouter } from './routes/router.js';

const PORT = 8000;

const app = express();

app.use('/api/startups', startupsRouter);
app.use('/api/products', productsRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
