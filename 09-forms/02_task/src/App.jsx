import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.createUser = this.createUser.bind(this);
  }

  createUser(obj) {
    console.log(obj);
  }

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
