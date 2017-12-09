import React from 'react';

class SearchResults extends React.Component {

  constructor(){
    super();

    this.state ={
      count: 5
    }
  }

  renderSearch(){
    if(this.props.user.main === "none"){
      return <h1>User not found, please search again</h1>;

    } else if (Object.keys(this.props.user).length >= 1) {
      const details = this.props.user;
      return (
        <div>
          <img src={details.main.profile_picture} alt={details.main.full_name}/>
          <h2>{details.main.username}</h2>

          {this.props.user.recent.slice(0, this.state.count).map((item, index)=>{
            return <p key={item.id}>{item.caption.text} ---- likes: {item.likes.count}</p>

          })}
        </div>
      )

    }

    return <h1>Loading...</h1>
  }


  resultCount(e){
    e.preventDefault();
    // console.log("submited ahha");

    console.log(this.results.value);

    const count = this.results.value;

    this.setState({count});


  }


  render() {

    console.log(this.props.user, "SERACH RESULTS!!!!!!");
    return (
      <div className="search-results">
        <form action="" onChange={this.resultCount.bind(this)}>
          <select ref={(input) => this.results = input}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </form>


        {this.renderSearch()}
      </div>
    );
  }
}



export default SearchResults;
