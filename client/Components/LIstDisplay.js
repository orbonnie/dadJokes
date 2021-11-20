import React from 'react';
import List from './List';

let ListDisplay = (props) => (
  <div>
    {props.lists.entries.map((list) =>
      <List list={list} key={list[0]} onClick={() => props.showList(list)} />
    )}
  </div>
)
export default ListDisplay;