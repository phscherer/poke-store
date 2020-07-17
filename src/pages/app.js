import React from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import SearchBar from '../components/SearchBar';
import Content from './Content';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Pokémon Store</h2>
      </div>
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;