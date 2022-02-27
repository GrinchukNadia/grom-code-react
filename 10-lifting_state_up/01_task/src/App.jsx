import React, { Component } from 'react';
import './index.scss';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    console.log(this.props.name)
    fetch(`https://api.github.com/users/${this.props.name}`)
      .then(response => response.json())
      .then(user => this.setState({user}))
  }

  render() {
    return (
      <div className='page'>
        <header className='header'>
          <UserMenu userData={this.state.user} />
        </header>
        <UserProfile userData={this.state.user} />
      </div>
    );
  }
}

export default App;
