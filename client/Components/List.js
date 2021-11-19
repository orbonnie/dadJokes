import React from 'react';
import ListItem from './ListItem';

//passed: [list name, [list items]]
const List = (props) => {
  return (
    <div>
      {props.list[1].map((listItem) =>
        <ListItem joke={listItem} key={listItem.id} />
      )}
    </div>
  )
};

export default List;