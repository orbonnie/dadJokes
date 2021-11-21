const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/jokes');

let jokeSchema = new Schema({
  id: { type: String, unique: true },
  joke: String,
  fave: Boolean,
  list: String
});

let Fave = mongoose.model('Fave', jokeSchema);

let save = (joke) => {
  let faveJoke = new Fave({
    id: joke.id,
    joke: joke.joke,
    list: joke.list || 'faves'
  }).save((err, data) => {
    if (err) {
      console.log('Error saving to DB: ', err);
    } else {
      console.log('Joke saved');
    }
  });
};

let getFaves = () => {
  return new Promise((resolve, reject) => {
    let jokes = Fave.find((err, results) => {
      if (err) {
        reject(console.log('Jokes not found in DB  ', err));
      } else {
        resolve(results);
      }
    });
  });
};

let remove = (joke) => {
  return new Promise((resolve, reject) => {
    Fave.deleteOne({ id: joke.id }, (err, result) => {
      if (err) {
        reject(console.log(joke.joke + ' NOT DELETED  ', err));
      } else {
        resolve(console.log(joke.joke + 'DELETED'));
      }
    });
  });


}

module.exports.save = save;
module.exports.getFaves = getFaves;
module.exports.remove = remove;