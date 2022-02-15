import React, { Component } from 'react';
import './user.scss';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then(response => response.json())
      .then(user => this.setState({user}))
  }

  render() {
    if(!this.state.user) {
      return null
    }

    const user = this.state.user

    return (
      <div className='user'>
        <img
          alt='User Avatar'
          src={user.avatar_url}
          className='user__avatar'
        />
        <div className='user__info'>
          <span className='user__name'>{user.name}</span>
          <span className='user__location'>{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
