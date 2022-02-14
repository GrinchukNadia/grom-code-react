import React, { Component } from 'react';
import User from './User.jsx';
import './user.scss';

class NumbersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: null,
    };
  }

  onToggleSort() {
    const sort = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: sort
    })
  }

  render() {
    let userList;
    if (this.state.sorting) {
      userList = this.props.users.slice().sort((a, b) => {
        return this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age;
      });
    } else {
      userList = this.props.users
    }

    return (
      <div>
        <button 
          onClick={() => this.onToggleSort()} 
          className='btn'
        >
          {this.state.sorting || '-'}
        </button>
        
        <ul className='users'>
          {userList.map((user) => <User key={user.id} {...user} /> )}
        </ul>
      </div>
    );
  }
}

export default NumbersList;
