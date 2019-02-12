import React, { Component } from 'react';
import '../css/styles.css';

class Header extends Component {

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <header className='header'>
          <div className='logo'>Logo</div>
          <input type='text' onChange={this.handleChange}/>
        </header>
      </div>
    );
  }
}

export default Header;