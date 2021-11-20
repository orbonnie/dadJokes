import React from 'react';
import { FaSave } from 'react-icons/fa';

const Joke = (props) => (
  <div>
    <div><FaSave className="save" onClick={() => props.save(props.joke)} /> {props.joke.joke} </div>
    <hr />
  </div>
)

export default Joke;