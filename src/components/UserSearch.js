import React from 'react';
import axios from 'axios';

class UserSearch extends React.Component {


  handleSearch(e){
    e.preventDefault();

    if(this.search.value){
      console.log("searched!");
      console.log(this.search.value);
      const search = this.search.value;




      this.searchForm.reset();
    } else {
      console.log("nothing searched!");
    }

  }

  splitStr(str){
    // const newStr = str.split(".")[1] + "." + str.split(".")[2];
    const newStr = str.split("=")[1]
    console.log(newStr);

    axios.get(`https://api.instagram.com/v1/users/self/?access_token=${newStr}`).then((res)=>{
      console.log(res, "loggin res");
    })
  }

  render() {

    console.log(window.location.href);

    this.splitStr(window.location.href);


    return (
      <form ref={(input)=>this.searchForm = input }className="user-search" onSubmit={this.handleSearch.bind(this)}>
        <input ref={(input)=> this.search = input} type="text"/>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default UserSearch;