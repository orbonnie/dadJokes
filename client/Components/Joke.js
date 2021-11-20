import React from 'react';
import { FaSave } from 'react-icons/fa';

const Joke = (props) => (
  <div>
    <div><FaSave class="save" />   {props.joke.joke} </div>
    <hr />
  </div>
)

export default Joke;