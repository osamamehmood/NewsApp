import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

class App extends Component {
  state = {
    news: JSON,
    keywords: '',
  }

  getKeyWord = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  }

  render() {
    console.log(this.state.keywords);
    return (
      <div>
        <Header getKeyWords={this.getKeyWord}/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
