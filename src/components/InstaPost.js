import React from 'react';
import moment from 'moment';

class InstaPost extends React.Component {
  render(){
    const divStyle={
      border: "1px solid black"
    }

    const det = this.props.details;

    const dateCreated = moment(det.created_time*1000).format('dddd, MMM Do, YYYY');



    return (
      <div className="insta-post" style={divStyle}>
        <img src={det.images.thumbnail.url} alt={det.id}/>
        <p>Likes: {det.likes.count} - Date Posted : {dateCreated}</p>
        <p>{det.caption.text}</p>
      </div>
    )
  }
}

export default InstaPost;
