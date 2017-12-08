import React, { Component } from 'react';
import UserSearch from './UserSearch';
import SearchResults from './SearchResults';
import '../css/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      instaToken: ""
    }
  }

  componentWillMount(){
    const instaToken = window.location.href.split("=")[1]
    this.setState({instaToken});
  }

  componentDidMount(){
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <UserSearch token={this.state.instaToken} />
        <SearchResults token={this.state.instaToken} />
      </div>
    );
  }
}

export default App;
