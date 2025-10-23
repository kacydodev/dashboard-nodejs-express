import express from 'express';
import { apiRouter } from '../routes/apiRouter.js';

const PORT = 8000;

const app = express();

app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
