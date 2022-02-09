import React from "react";
import './login.scss'

class Login extends React.Component {
  render() {
    return(
      <button 
        onClick={() => this.props.onLogin()} 
        className="btn login"
      >
        Login
      </button>
    )
  }
}

export default Login;