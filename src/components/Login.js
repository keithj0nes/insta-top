import React from 'react';
var config = require('../config');

class Login extends React.Component {


  handleLogin(e){
    e.preventDefault();
    console.log("handleLogin");

  }
  render() {

    console.log(config.instaCred);
    return (

      <div className="login-main">
        <h1>Login</h1>
        <form action="" onSubmit={this.handleLogin}>
          <button><a href={`https://api.instagram.com/oauth/authorize/?client_id=${config.instaCred.client_id}&redirect_uri=http://localhost:3000/top/&response_type=token&scope=likes+public_content`}>Login with Instagram</a></button>
        </form>
      </div>
    );
  }
}

export default Login;
