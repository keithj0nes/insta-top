import React from 'react';
import axios from 'axios';

class UserSearch extends React.Component {


  handleSearch(e){
    e.preventDefault();
    console.log(this.search.value);


  }

  render() {
    return (
      <form className="user-search" onSubmit={this.handleSearch.bind(this)}>
        <input ref={(input)=> this.search = input} type="text"/>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default UserSearch;
