const axios = require('axios');

let getRandomJokes = (callback) => {
  let page = Math.ceil(Math.random() * 30)
  let options = {
    method: 'GET',
    // url: `http://api.icndb.com/jokes/random/10`,
    url: `https://icanhazdadjoke.com/search?limit=1&page=${page}`,
    headers: {
      'User-Agent': 'Dad Joke Generator',
      'Accept': 'application/json',
      'limit': 1
    }
  };

  return axios.request(options)
    .then(response => {
      callback(null, JSON.stringify(response.data));
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports.getRandomJokes = getRandomJokes;