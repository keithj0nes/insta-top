import React from 'react';

class SearchResults extends React.Component {

  //should display user's info by default

  // axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${newStr}`).then((res)=>{
  //   console.log(res, "loggin res");
  // })

  renderSearch(){
    if(Object.keys(this.props.user).length >= 1){
      console.log("THERESE CONTENTE");
      const details = this.props.user;
      
      return (
        <div>
          <img src={details.main.profile_picture} alt={details.main.full_name}/>
          <h2>{details.main.username}</h2>
        </div>

      )
    }

    return <h1>Search for a user</h1>
  }


  render() {

    console.log(this.props.user, "SERACH RESULTS!!!!!!");
    return (
      <div className="search-results">
        {this.renderSearch()}
      </div>
    );
  }
}



export default SearchResults;
