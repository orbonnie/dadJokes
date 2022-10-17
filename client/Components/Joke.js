import React from 'react';
import $ from 'jquery';
import { FaSave } from 'react-icons/fa';
import { IoRemoveCircle } from 'react-icons/io5';
import { IoCheckmark } from 'react-icons/io5';

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
    console.log('saved');

    $('#save' + this.props.joke.id).addClass('hide');
    $('#saved' + this.props.joke.id).removeClass('hide');
    $('#delete' + this.props.joke.id).removeClass('hide');
    this.props.save(this.props.joke);
  }

  onDeleteClick() {
    $('#save' + this.props.joke.id).removeClass('hide');
    $('#saved' + this.props.joke.id).addClass('hide');
    $('#delete' + this.props.joke.id).addClass('hide');
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
      <div className='joke'>
        <div>
          <FaSave id={'save' + this.props.joke.id} onClick={() => this.onSaveClick(this.props.joke)} />
          <IoCheckmark id={'saved' + this.props.joke.id} className="hide" />
          {this.props.joke.joke}
          <IoRemoveCircle id={'delete' + this.props.joke.id} className="hide" onClick={() => this.onDeleteClick(this.props.joke)} />
        </div>
        <hr />
      </div>
    )
  }
}

export default Joke;