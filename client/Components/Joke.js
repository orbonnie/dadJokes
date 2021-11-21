import React from 'react';
import { FaSave } from 'react-icons/fa';
import { IoRemoveCircle } from 'react-icons/io5';

class Joke extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      save: 'inline',
      delete: 'none'
    };
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onSaveClick() {
    this.props.save(this.props.joke);
  }

  onDeleteClick() {
    this.props.delete(this.props.joke);
  }


  render() {
    let saveStyle = {
      display: this.props.buttons.save
    };

    let deleteStyle = {
      display: this.props.buttons.delete
    };

    return (
      <div>
        <div><FaSave className="save" onClick={() => this.props.save(this.props.joke)} style={saveStyle} /> {this.props.joke.joke} <IoRemoveCircle onClick={() => this.props.delete(this.props.joke)} style={deleteStyle} /> </div>
        <hr />
      </div>
    )
  }


}

export default Joke;