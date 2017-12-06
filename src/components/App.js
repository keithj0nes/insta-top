import React, { Component } from 'react';
import UserSearch from './UserSearch';
import SearchResults from './SearchResults';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserSearch />
        <SearchResults />
      </div>
    );
  }
}

export default App;
