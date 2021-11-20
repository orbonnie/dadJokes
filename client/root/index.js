import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Accounts from '../Components/Accounts';
import JokeDisplay from '../Components/JokeDisplay';
import JokeSearch from '../Components/JokeSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      jokes: [],
      lists: {
        list1: [
          {
            "id": "GlGBIY0wAAd",
            "joke": "How much does a hipster weigh? An instagram."
          },
          {
            "id": "xc21Lmbxcib",
            "joke": "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."
          }
        ],
        list2: [
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
        ]
      },
    };
    this.search = this.search.bind(this);
    this.generate = this.generate.bind(this);
  }

  generate() {
    // console.log('random jokes');

    $.get('/random', (jokes) => {
      this.setState({ heading: '', jokes: JSON.parse(jokes).results });
    })
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   contentType: 'application/json',
    //   success: (jokes) => {
    //     // jokes.forEach(joke => console.log(joke));
    //     console.log(jokes);
    //   }
    // })
  }

  search(keyword) {
    console.log('search jokes');
    $.post('/search', { 'keyword': keyword }, (jokes) => {
      this.setState({ heading: `Results for ${keyword}`, jokes: JSON.parse(jokes).results });
    })
    // const url = '/search';
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   contentType: 'application/json',
    //   data: JSON.stringify({ keyword: keyword }),
    //   success: (jokes) => {
    //     // jokes.forEach(joke => console.log(joke));
    //     console.log(jokes);
    //   }
    // });
  }


  render() {
    return (<div>
      <Accounts />
      <JokeSearch keySearch={this.search} generate={this.generate} />
      <JokeDisplay jokes={this.state.jokes} heading={this.state.heading} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));