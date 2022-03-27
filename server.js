const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { getJokesByKeyword } = require('./helpers/getJokesByKeyword');
const { getRandomJokes } = require('./helpers/getRandomJokes');
const { save } = require('./database/db');
const { getFaves } = require('./database/db');
const { remove } = require('./database/db');


dotenv.config({ path: './config/config.env' });

let app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', (req, res) => {
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

app.post('/faves', (req, res) => {
  save(req.body.joke);
  res.end();
});

app.delete('/faves', (req, res) => {
  console.log(req.body.joke.id)
  remove(req.body.joke);
  res.end();
});

app.get('/faves', (req, res) => {
  getFaves()
    .then(response => res.send(response))
    .catch(err => console.log('Error getting jokes from DB: ', err));
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));