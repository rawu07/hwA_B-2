import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyCAg8x0SbwBLSM8b18CztLnQAE1ECNHh2Q';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
    <App />,
    document.querySelector('.container'));
