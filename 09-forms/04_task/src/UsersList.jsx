import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';
import './user.scss';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const { value } = event.target;
    this.setState({
      filterText: value,
    });
  }

  render() {
    const userList = this.props.users
      .slice()
      .filter(({ name }) =>
        name.toLowerCase().includes(this.state.filterText.toLowerCase())
      );
    const count = userList.length
    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={count}
          handleInput={this.handleInput}
        />

        <ul className='users'>
          {userList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
