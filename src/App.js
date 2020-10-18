import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChessBoard from './components/Game';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChessBoard/>
      </header>
    </div>
  );
}

export default App;
