import React, { Component } from 'react';
import UserSearch from './UserSearch';
import SearchResults from './SearchResults';
import '../css/App.css';

class App extends Component {

  constructor(){
    super();

    this.searchUser = this.searchUser.bind(this);

    this.state = {
      instaToken: "",
      user: {}
    }
  }

  componentWillMount(){
    const instaToken = window.location.href.split("=")[1]
    this.setState({instaToken});
  }

  componentDidMount(){
    console.log(this.state);
  }

  searchUser(user){
    this.setState({user})
  }


  render() {
    return (
      <div className="App">
        <UserSearch token={this.state.instaToken} searchUser={this.searchUser}/>
        <SearchResults token={this.state.instaToken} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
