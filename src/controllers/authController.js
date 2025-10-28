import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

export const signUp = (req, res) => {
  console.log(res.body);
};
