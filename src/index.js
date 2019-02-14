import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import JSON from './db.json';
import NewsList from './components/NewsList';

class App extends Component {
  state = {
    news: JSON,
    filtered: [],
  }

  getKeyWord = (e) => {
    let keyword = e.target.value;
    let filtered = this.state.news.filter(news => {
      return news.title.indexOf(keyword) > -1 ; //returns if value of e.target.value is contained in the string (return if true)
    });
    this.setState({
      filtered,
    })
  }

  render() {
    let filteredNews = this.state.filtered;
    let unFilteredNews = this.state.news;
    return (
      <div>
        <Header getKeyWords={this.getKeyWord}/>
        <NewsList news={this.state.filtered.length === 0 ?  unFilteredNews : filteredNews}>
          <h3>
            The news are:
          </h3>
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
