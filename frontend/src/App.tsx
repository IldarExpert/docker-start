import axios from 'axios';
import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const makeAPIRequest = (e: any) => {
    e.preventDefault();
    axios.get('/api/test').then((response) => {
      console.log(response.data);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeAPIRequest}>Make API request</button>
      </header>
    </div>
  );
}

export default App;
