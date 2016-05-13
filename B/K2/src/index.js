import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCAg8x0SbwBLSM8b18CztLnQAE1ECNHh2Q';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    YTSearch({key: API_KEY, term: 'ntue dtd'}, videos => this.setState({videos}));
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
ReactDOM.render(
    <App />,
    document.querySelector('.container'));
