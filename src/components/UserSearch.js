import React from 'react';
import axios from 'axios';

class UserSearch extends React.Component {


  handleSearch(e){
    e.preventDefault();

    if(this.search.value){
      console.log("searched!");
      console.log(this.search.value);
      const search = this.search.value;
      const token = this.props.token


      axios.get(`https://api.instagram.com/v1/users/search?q=${search}&access_token=${token}`)
        .then((res)=>{
          // console.log(res.data, "get res");
          const userId = res.data.data[0].id
          axios.get(`https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${token}`)
            .then((res2)=>{
              // console.log(res2.data);

              const newSearchedUser = {
                main: res.data.data[0],
                recent: res2.data.data
              }

              this.props.searchUser(newSearchedUser);
            })
            .catch((err)=>{
              console.log(err, "second err");
            })



        })
        .catch((err)=>{
          console.log(err, "loggin err");
        })

      this.searchForm.reset();
    } else {
      console.log("nothing searched!");

    }

  }

  render() {

    return (
      <form ref={(input)=>this.searchForm = input }className="user-search" onSubmit={this.handleSearch.bind(this)}>
        <input ref={(input)=> this.search = input} type="text"/>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default UserSearch;
