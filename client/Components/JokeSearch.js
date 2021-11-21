import React from 'react';

class JokeSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.generate = this.generate.bind(this);
  }

  onChange(e) {
    this.setState({ keyword: e.target.value });
  }

  search() {
    this.props.keySearch(this.state.keyword);
    this.state.keyword = '';
  }

  generate() {
    this.props.generate();
  }

  render() {
    return (<div>
      <button onClick={this.generate}>Random Jokes</button>
      <br /> <br />
      <b>Customize Your Jokes </b><input value={this.state.keyword} placeholder="Enter keyword" onChange={this.onChange} />
      <button onClick={this.search}>Search</button>

      <br /> <br /> <br />
    </div>)
  }
}

export default JokeSearch;