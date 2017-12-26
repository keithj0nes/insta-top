import React from 'react';
import moment from 'moment';

import '../css/instapost.css';

class InstaPost extends React.Component {
  render(){
    const det = this.props.details;

    const dateCreated = moment(det.created_time*1000).format('dddd, MMM Do, YYYY');



    return (
      <div className="insta-post">
        <div className="image-container">
          <img src={det.images.low_resolution.url} alt={det.id}/>
          <span className="order-index">{this.props.index}</span>
        </div>

        <p className="like-count"><strong>{det.likes.count}</strong> people like this</p>
        <p className="caption">{det.caption.text}</p>
        <p className="date-created">{dateCreated}</p>

      </div>
    )
  }
}

export default InstaPost;
