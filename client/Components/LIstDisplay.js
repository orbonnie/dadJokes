import React from 'react';
import List from './List';

let ListDisplay = (props) => (
  <div>
    {props.lists.entries.map((list) =>
      <List list={list} key={list[0]} />
    )}
  </div>
)
export default ListDisplay;