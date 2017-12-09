import React from 'react';

class SearchResults extends React.Component {

  renderSearch(){
    if(this.props.user.main === "none"){
      return <h1>User not found, please search again</h1>;

    } else if (Object.keys(this.props.user).length >= 1) {
      const details = this.props.user;
      return (
        <div>
          <img src={details.main.profile_picture} alt={details.main.full_name}/>
          <h2>{details.main.username}</h2>
        </div>
      )

    }

    return <h1>Loading...</h1>
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
