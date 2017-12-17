import React from 'react';
import '../css/login.css';
import instaLogo from '../img/inst.png';

var config = require('../config');


class Login extends React.Component {


  render() {

    return (

      <div className="login-main" >
        <form>
          <h1>Insta-Top</h1>
          <a className="button" href={`https://api.instagram.com/oauth/authorize/?client_id=${config.instaCred.client_id}&redirect_uri=http://localhost:3000/top/&response_type=token&scope=likes+public_content`}> <img src={instaLogo} alt="instagram logo"/> Login with Instagram</a>
        </form>
      </div>
    );
  }
}

export default Login;
