const express = require('express');
const bodyParser = require('body-parser');
const { getJokesByKeyword } = require('./helpers/getJokes');
const { getRandomJokes } = require('./helpers/getJokes');

let app = express();

// app.use('/', express.static(__dirname + '/../client/root'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  console.log('req body: ', req.body);
  // let jokes = getJokesByKeyword('happy');
  res.send('found search GET');
});

app.get('/random', (req, res) => {
  console.log('req body: ', req.body);
  // let jokes = getJokesByKeyword('happy');
  res.send('found random GET');
});

let PORT = 1128;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));