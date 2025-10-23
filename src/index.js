import express from 'express';
import { startupsRouter } from '../routes/startupsRouter.js';

const PORT = 8000;

const app = express();

app.use('/api/startups', startupsRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
