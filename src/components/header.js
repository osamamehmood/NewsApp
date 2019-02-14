import React from 'react';
import '../css/styles.css';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='logo'>Logo</div>
      <input type='text' onChange={props.getKeyWords}/>
    </header>
  );
}

export default Header;