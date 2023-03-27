import React from 'react'
import './css/App.css';
import './css/Header.css';
import Main from './components/Main.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header id="header"></Header>
      <Main></Main>
    </div>
  );
}

export default App;
