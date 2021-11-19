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

    lists: {
      list1: ['joke1', 'joke2', 'joke3'];
      list2: ['joke4', 'joke5', 'joke6'];
      list3: ['joke7', 'joke8', 'joke9'];
    };
    this.search.bind(this);
  }

  generate() {
    const url = '/random';
    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json',
      success: (jokes) => {
        // jokes.forEach(joke => console.log(joke));
        console.log(jokes);
      }
    })
  }

  search(keyword) {
    const url = '/search';
    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/json',
      data: JSON.stringify({ keyword: keyword }),
      success: (jokes) => {
        // jokes.forEach(joke => console.log(joke));
        console.log(jokes);
      }
    });
  }


  render() {
    return (<div>
      <Accounts />
      <JokeSearch keySearch={this.search.bind(this)} generate={this.generate.bind(this)} />
      <JokeDisplay jokes={this.state.jokes} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));