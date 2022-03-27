import React from 'react';
import Joke from './Joke';

const JokeDisplay = (props) => {
  return (
    <div className='jokeContainer'>
      <div className='jokeDisplay'>
        <h3>{props.heading}</h3>
        {props.jokes.map((joke) =>
          <Joke joke={joke} key={joke.id} save={props.save} delete={props.delete} buttons={props.buttons} />
        )}
      </div>
    </div>
  )
};

export default JokeDisplay;
