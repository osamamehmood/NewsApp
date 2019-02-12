import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {

  state = {
    title: 'The keywords are:',
    keywords: ''
  }

  handleChange = (e) => {
    this.setState({
      keywords: e.target.value,
    })
  }

  render() {
    console.log('Keywords are', this.state.keywords);
    return (
      <header className='header'>
        <div className='logo'>Logo</div>
        <input type='text' onChange={this.handleChange}/>
      </header>
    );
  }
}

export default Header;