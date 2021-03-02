import React from 'react';
import logo from './mboga.jpg';
import './App.css';
import Oranges from './MyComponents';
function App() {
  return (
    <div className="App">
      <div id="root">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sheliza's React App!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
