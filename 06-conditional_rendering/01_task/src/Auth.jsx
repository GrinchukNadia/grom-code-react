import React, { Component } from 'react';
import './auth.scss';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false,
    };

    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogin() {
    this.setState({
      isLoggedin: true
    })
  }

  onLogout() {
    this.setState({
      isLoggedin: false,
    });
  }

  render() {
    const button = this.state.isLoggedin 
      ? (<Logout onLogout={this.onLogout} />) 
      : (<Login onLogin={this.onLogin} />);

    return (
      <div className='panel'>
        <Greeting isLoggedin={this.state.isLoggedin} />
        {button}
      </div>
    );
  }
}

export default Auth;
