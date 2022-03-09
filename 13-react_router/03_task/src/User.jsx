import React from 'react';
// import { useParams } from 'react-router-dom';

const url = 'https://api.github.com/users'

class User extends React.Component {
  state = {
    userData: null
  }

  componentDidMount() {
    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const nextUser = this.props.match.params.userId;
    if(prevUser !== nextUser) {
      this.fetchUserData()
    }
  }

  fetchUserData() {
    const { match } = this.props

    fetch(`${url}/${match.params.userId}`)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
          throw new Error('Failed to load user')
        
      })
      .then(userData => {
        this.setState({userData})
      })
  }
  
  render() {
    const { userData } = this.state

    if(!userData) {
      return null
    }

    const {avatar_url, name, location} = userData
    return (
      <div className='user'>
        <img
          alt='User Avatar'
          src={avatar_url}
          className='user__avatar'
        />
        <div className='user__info'>
          <span className='user__name'>{name}</span>
          <span className='user__location'>{location}</span>
        </div>
      </div>
    );
  }
};

export default User;
