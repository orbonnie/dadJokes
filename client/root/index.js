import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Accounts from '../Components/Accounts';
import JokeDisplay from '../Components/JokeDisplay';
import JokeSearch from '../Components/JokeSearch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          "id": "M7wPC5wPKBd",
          "joke": "Did you hear the one about the guy with the broken hearing aid? Neither did he."
        },
        {
          "id": "MRZ0LJtHQCd",
          "joke": "What do you call a fly without wings? A walk."
        },
        {
          "id": "usrcaMuszd",
          "joke": "What's the worst thing about ancient history class? The teachers tend to Babylon."
        }
      ],
    };
    // this.search.bind(this);
  }

  search(keyword) {
    const url = `https://icanhazdadjoke.com/search?term=${keyword}`;
    const url2 = 'https://icanhazdadjoke.com/';
    fetch(url2, {
      method: GET
    }).then(res => res.json())
      .then(json => console.log('jokes ', json));
  }


  render() {
    console.log('At app render ', this.state.jokes);
    return (<div>
      <Accounts />
      <JokeSearch keySearch={this.search.bind(this)} />
      <JokeDisplay jokes={this.state.jokes} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));