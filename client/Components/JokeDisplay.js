import React from 'react';
import Joke from './Joke';

const JokeDisplay = (props) => {
  console.log('in jokedisplay ', props);
  return (
    <div>
      {props.jokes.map((joke) =>
        <Joke joke={joke} key={joke.id} />
      )}
    </div>
  )
};

export default JokeDisplay;
