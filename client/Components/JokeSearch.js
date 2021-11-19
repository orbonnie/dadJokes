import React from 'react';

class JokeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({ keyword: e.target.value });
  }

  search() {
    this.props.keySearch(this.state.keyword);
    this.state.keyword = '';
  }

  render() {
    return (<div>
      <b>Customize Your Jokes </b><input value={this.state.keyword} placeholder="Enter keyword" onChange={this.onChange} />
      <button onClick={this.search}>Search</button>
    </div>)
  }

}

export default JokeSearch;