import express from 'express';

const PORT = 8000;
const data = {
	foo: 1,
	bar: 2,
};

const app = express();

app.get('/', (req, res) => {
	res.json(data);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
