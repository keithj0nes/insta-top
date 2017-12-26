import React from 'react';
import moment from 'moment';

import '../css/instapost.css';

class InstaPost extends React.Component {
  render(){
    const det = this.props.details;

    const dateCreated = moment(det.created_time*1000).format('dddd, MMM Do, YYYY');



    return (
      <div className="insta-post">
        <img src={det.images.low_resolution.url} alt={det.id}/>
        <p className="like-count"><strong>{det.likes.count}</strong> people like this</p>
        <p className="caption">{det.caption.text}</p>
        <p className="date-created">{dateCreated}</p>

      </div>
    )
  }
}

export default InstaPost;
