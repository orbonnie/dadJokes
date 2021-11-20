import React from 'react';

const ListBtn = (props) => (
  <div>
    <br />
    <button onClick={props.showLists} lists={props.lists}>My Lists</button>
    <button onClick={props.createList}>Create a Lists</button>
    <br /> <br />
  </div>
)

export default ListBtn;