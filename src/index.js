import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello world</h1>
      <h2>Learn react</h2>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
