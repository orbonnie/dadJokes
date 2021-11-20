const express = require('express');
const bodyParser = require('body-parser');
const { getJokesByKeyword } = require('./helpers/getJokesByKeyword');
const { getRandomJokes } = require('./helpers/getRandomJokes');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

let app = express();

console.log(__dirname + '/client/root');
app.use(express.static(__dirname + '/client/root'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', (req, res) => {
  console.log('req.body ', req.body);
  getJokesByKeyword(req.body.keyword, (err, results) => {
    if (err) {
      console.log('Keyword API error: ', err);
    } else {
      res.send(results);
    }
  });
});

app.get('/random', (req, res) => {
  getRandomJokes((err, results) => {
    if (err) {
      console.log('Random API error: ', err);
    } else {
      res.send(results);
    }
  });
});

const PORT = process.env.PORT || 1128;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));