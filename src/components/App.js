import React, { Component } from 'react';
import UserSearch from './UserSearch';
import SearchResults from './SearchResults';
import axios from 'axios';

import '../css/app.css';

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
    axios.get(`https://api.instagram.com/v1/users/self/?access_token=${instaToken}`).then((res) => {
      // console.log(res.data, "self RESSSS");
      axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${instaToken}`).then((res2) => {
        // console.log(res2.data, "TWO RESSSS");
        let results = res2.data.data.sort((a,b)=>{
          return b.likes.count-a.likes.count;
        })

        // console.log(results, "logging arrrr");
        const user = {
          main: res.data.data,
          recent: results
        }

        this.setState({instaToken, user});
      })
    })
  }

  componentDidMount(){
    // console.log(this.state);
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
