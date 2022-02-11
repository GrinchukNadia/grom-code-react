import React, { Component } from 'react';
import Login from './Login.jsx';
import './auth.scss';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      counter: 1
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin() {
    this.setState({
      counter: 0
    })
    setTimeout(() => {
      this.setState({
        isLogin: true,
      });
    }, 2000);
  }

  onLogout() {
    this.setState({
      isLogin: false,
      counter: 1
    });
  }

  render() {
    if (this.state.isLogin) {
      return <Logout onLogout={this.onLogout} />;
    }
    return this.state.counter > 0 
      ? <Login onLogin={this.onLogin} />
      : <Spinner size={30} />
  }
}

export default Auth;
