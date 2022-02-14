import React, { Component } from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import './user.scss';

class UsersList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
    
    this.goPrev = this.goPrev.bind(this)
    this.goNext = this.goNext.bind(this)
  }
  
  goPrev() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    })
  }
  goNext() {
        this.setState({
          currentPage: this.state.currentPage + 1,
        });
  }
  
  render() {
    const users = this.props.users;
    const lastItem = this.state.currentPage * this.state.itemsPerPage;
    const firstItem = lastItem - this.state.itemsPerPage;

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={users.length}
          itemsPerPage={this.state.itemsPerPage} />
        <ul className='users'>
          {users.slice(firstItem, lastItem).map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
