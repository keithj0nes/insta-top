import React from 'react';

class SearchResults extends React.Component {

  //should display user's info by default
  
  // axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${newStr}`).then((res)=>{
  //   console.log(res, "loggin res");
  // })
  render() {
    return (
      <h1>SearchResults</h1>
    );
  }
}

export default SearchResults;
