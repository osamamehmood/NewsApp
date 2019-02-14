import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {

  state = {
    title: 'The keywords are:',
    keywords: ''
  }

  handleChange = (e) => {
    console.log('Hi');
    this.setState({
      keywords: e.target.value,
    })
  }

  render() {
    console.log(this.props.keywords)
    return (
      <header className='header'>
        <div className='logo'>Logo</div>
        <input type='text' onChange={this.handleChange}/>
      </header>
    );
  }
}

export default Header;