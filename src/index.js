import express from 'express';
import { apiRouter } from '../routes/apiRouter.js';

const PORT = 8000;

const app = express();
app.use('/api', apiRouter);

// app.get('/api', (req, res) => {
//   res.json(startups);
// });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
