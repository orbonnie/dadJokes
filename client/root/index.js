import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Accounts from '../Components/Accounts';
import JokeDisplay from '../Components/JokeDisplay';
import JokeSearch from '../Components/JokeSearch';
import ListBtn from '../Components/ListBtn';
import ListClass from '../Components/ListClass';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      jokes: [],
      lists: {
        main: [],
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
    this.showLists = this.showLists.bind(this);
    this.save = this.save.bind(this);
    this.createList = this.createList.bind(this);
  }



  generate() {
    $.get('/random', (jokes) => {
      this.setState({ heading: '', jokes: JSON.parse(jokes).results });
    });
  }

  search(keyword) {
    $.post('/search', { 'keyword': keyword }, (jokes) => {
      this.setState({ heading: `Results for "${keyword}"`, jokes: JSON.parse(jokes).results });
    });
  }

  showLists() {
    console.log(this.state.lists);
  }

  save(joke) {
    this.state.lists.main.push(joke);
    console.log(this.state.lists.main);
  }

  createList() {
    alert
    this.state.lists[name] = [];
    console.log(this.state.lists);
  }


  render() {
    return (<div>
      <Accounts />
      <ListBtn showLists={this.showLists} createList={this.createList} lists={this.lists} />
      <JokeSearch keySearch={this.search} generate={this.generate} />
      <JokeDisplay jokes={this.state.jokes} heading={this.state.heading} save={this.save} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));