const axios = require('axios');

let getJokesByKeyword = (keyword, callback) => {
  let options = {
    method: 'GET',
    // url: `http://api.icndb.com/jokes/random/10`,
    url: `https://icanhazdadjoke.com/search?limit=10&term=${keyword}`,
    headers: {
      'User-Agent': 'Dad Joke Generator',
      'Accept': 'application/json',
      'limit': 10
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

module.exports.getJokesByKeyword = getJokesByKeyword;
