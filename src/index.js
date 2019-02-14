import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

class App extends Component {
  state = {
    news: JSON,
  }

  getKeyWord = () => {
    console.log('Hey');
  }
  render() {
    return (
      <div>
        <Header keywords={this.getKeyWord}/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
