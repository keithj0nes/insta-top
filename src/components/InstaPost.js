import React from 'react';
import moment from 'moment';

class InstaPost extends React.Component {

  render(){

    const divStyle={
      border: "1px solid black"
    }


    const det = this.props.details;


    const timeCreated = new Date(det.created_time * 1000)//.toString();

    // const newTime = moment(timeCreated).format('dddd, MMM Do, YYYY');
    // const day = timeCreated.getDay();
    // const mo = timeCreated.getMonth();
    // const yr = timeCreated.getFullYear();

    return (
      <div className="insta-post" style={divStyle}>
        <img src={det.images.low_resolution.url} alt={det.id}/>
        <p>Likes: {det.likes.count} - Date Posted : </p>
        <p>{det.caption.text}</p>

      </div>
    )
  }


}

export default InstaPost;
