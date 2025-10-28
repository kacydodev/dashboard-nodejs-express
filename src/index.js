import express from 'express';
import { productsRouter, startupsRouter } from './routes/example.js';
import { authRouter } from '#routes/auth.js';

const PORT = 8000;

const app = express();
app.use(express.json());

app.use('/api/startups', startupsRouter);
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
