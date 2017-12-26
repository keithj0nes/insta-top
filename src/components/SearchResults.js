import React from 'react';
import InstaPost from './InstaPost';

class SearchResults extends React.Component {
  constructor(){
    super();
    this.resultCount = this.resultCount.bind(this);
    this.resultOrder = this.resultOrder.bind(this);

    this.state ={
      count: 5,
      order: "desc"
    }
  }

  renderSearch(){
    if(this.props.user.main === "none"){
      return <h1>User not found, please search again</h1>;

    } else if (Object.keys(this.props.user).length >= 1) {
      const details = this.props.user;
      return (
        <div className="data">
          <img className="profile" src={details.main.profile_picture} alt={details.main.full_name}/>
          <h2>{details.main.username}</h2>

          {this.state.order === "desc" ? this.props.user.recent.slice(0, this.state.count).map((item, index)=>{
            // console.log(this.state.order, "Top Likes");
            return <InstaPost key={item.id} details={item} index={index+1}/>
            }) : this.props.user.recent.reverse().slice(0, this.state.count).map((item, index)=>{
            // console.log(this.state.order, "Least Likes");
            return <InstaPost key={item.id} details={item} index={index+1}/>
           })}
        </div>
      )
    }
    return <h1>Loading...</h1>
  }


  resultCount(e){
    e.preventDefault();
    console.log(this.results.value);
    const count = this.results.value;
    this.setState({count});
  }

  resultOrder(e){
    e.preventDefault();
    console.log(this.orderBy.value);
    const order = this.orderBy.value;
    this.setState({order})
  }

  componentDidUpdate(){
    console.log(this.state.order, "componentDidUpdate");
    this.renderSearch();
  }


  render() {
    console.log(this.props.user, "SERACH RESULTS!!!!!!");
    return (
      <div className="search-results">
        <div className="sorting">
          <div>
            <h4>Results</h4>
            <select ref={(input) => this.results = input} onChange={this.resultCount}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <h4>Order</h4>
            <select ref={(input) => this.orderBy = input} onChange={this.resultOrder}>
              <option value="desc">Top Likes</option>
              <option value="asc">Least Likes</option>
            </select>
          </div>
        </div>

        {this.renderSearch()}
      </div>
    );
  }
}

// {this.props.user.recent.slice(0, this.state.count).map((item, index)=>{
//   return <p key={item.id}>{item.caption.text} ---- likes: {item.likes.count}</p>
//
// })}


// {  this.state.order === "desc" ? this.props.user.recent.slice(0, this.state.count).map((item, index)=>{
//     return <p key={item.id}>{item.caption.text} ---- likes: {item.likes.count}</p>
//
//   }) : this.props.user.recent.slice(0, this.state.count).reverse().map((item, index)=>{
//     return <p key={item.id}>{item.caption.text} ---- likes: {item.likes.count}</p>
//
//   })}


export default SearchResults;
