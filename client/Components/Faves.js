import React from 'React';

const Faves = (props) => {
  return (
    <div>
      <button onClick={props.showFaves} >Favorites</button>
    </div>
  )
}

export default Faves;