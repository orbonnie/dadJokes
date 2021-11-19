const axios = require('axios');

let options = {
  randUrl: 'https://https://icanhazdadjoke.com/search?limit=10'
  keyUrl: `https://https://icanhazdadjoke.com/search?term=${keyword}`,
  headers: {
    'User-Agent': 'Dad Joke Generator',
    'Content-Type': 'application/json',
  }
};

let getRandomJokes = (callback) => {
  axios.get(options.randUrl, options.headers)
    .then(res => {
      callback(JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log('There was an error with random API: ', error);
    })
}

let getJokesByKeyword = (keyword, callback) => {

  axios.get(options.keyUrl, options.headers)
    .then(res => {
      callback(JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log('There was an error with the keyword API: ', error);
    });
};

module.exports.getJokeByKeyword = getJokeByKeyword;