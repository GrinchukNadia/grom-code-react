import React, { Component } from 'react';
import './index.scss';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.name}`)
      .then(response => response.json())
      .then(userData => this.setState({userData}))
  }

  render() {
    return (
      <div className='page'>
        <header className='header'>
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
