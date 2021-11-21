import React from 'React';

const Faves = (props) => {
  return (
    <div>
      <br />
      <button onClick={props.showFaves} >Favorites</button>
      <br /> <br />
    </div>
  )
}

export default Faves;