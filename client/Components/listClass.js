import React from 'react';

class ListClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listName: ''
    }
    this.onChange = this.onChange.bind(this);
    this.createList = this.createList.bind(this);
    this.showLists = this.showLists.bind(this);
  }

  onChange(e) {
    this.setState({ listName: e.target.value });
  }

  createList() {
    this.props.createList(this.state.listName);
  }

  showLists() {
    this.props.showLists();
  }

  render() {
    return (<div>
      <br />
      <button onClick={this.showLists} lists={this.props.lists}>My Lists</button>
      <button onClick={this.createList}>Create a Lists</button>
      <br /> <br />
    </div>)
  }
}

export default ListClass;