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

  search(e) {
    if (this.state.keyword.length > 0) {
    this.props.keySearch(this.state.keyword);
    this.state.keyword = '';
    }
    e.preventDefault();
  }

  generate() {
    this.props.generate();
  }

  render() {
    return (
    <div>
      <button onClick={this.generate}>Random Jokes</button>
      <form className='search'>
        <label>
          <b className='searchLabel'>Customize Your Jokes </b>
          <input value={this.state.keyword} placeholder="Enter keyword" onChange={this.onChange} />
        </label>
        <button onClick={(e) => this.search(e)}>Search</button>
      </form>
    </div>
    )
  }
}

export default JokeSearch;