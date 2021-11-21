import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Accounts from '../Components/Accounts';
import JokeDisplay from '../Components/JokeDisplay';
import JokeSearch from '../Components/JokeSearch';
import ListBtn from '../Components/ListBtn';
import Faves from '../Components/Faves';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: '',
      jokes: [],
      favorite: {
        isFave: false,
        save: 'inline',
        delete: 'none'
      }
    }

    this.search = this.search.bind(this);
    this.generate = this.generate.bind(this);
    this.showLists = this.showLists.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.createList = this.createList.bind(this);
    this.showFaves = this.showFaves.bind(this);
  }

  generate() {
    $.get('/random', (jokes) => {
      this.setState({ heading: '', jokes: JSON.parse(jokes).results });
    });
    this.setState(prevState => ({
      favorite: {
        ...prevState.save,
        save: 'inline',
        ...prevState.delete,
        delete: 'none'
      }
    }));
  }

  search(keyword) {
    $.post('/search', { 'keyword': keyword }, (jokes) => {
      this.setState({ heading: `Results for "${keyword}"`, jokes: JSON.parse(jokes).results });
    });
    this.setState(prevState => ({
      favorite: {
        ...prevState.save,
        save: 'inline',
        ...prevState.delete,
        delete: 'none'
      }
    }));
  }

  save(joke) {
    $.post('/faves', { joke: joke });
  }

  delete(joke) {
    $.ajax({
      url: '/faves',
      type: 'DELETE',
      data: { joke: joke },
      success: () => console.log('joke deleted')
    });
    this.showFaves();
  }

  showFaves() {
    $.get('/faves', (jokes) => {
      this.setState({ heading: 'Favorites', jokes: jokes });
    });
    this.setState(prevState => ({
      favorite: {
        ...prevState.save,
        save: 'none',
        ...prevState.delete,
        delete: 'inline'
      }
    }));
  }

  // createList() {
  //   alert
  //   this.state.lists[name] = [];
  //   console.log(this.state.lists);
  // }

  // showLists() {
  //   console.log(this.state.lists);
  // }
  // <Accounts />
  // <ListBtn showLists={this.showLists} createList={this.createList} lists={this.lists} />

  render() {
    return (<div className="container">
      <h1>DAD JOKE GENERATOR</h1>
      <Faves showFaves={this.showFaves} className="header" />
      <JokeSearch keySearch={this.search} generate={this.generate} />
      <JokeDisplay jokes={this.state.jokes} heading={this.state.heading} save={this.save} delete={this.delete} buttons={this.state.favorite} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));