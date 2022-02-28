import React, { Component } from 'react';
import './index.scss';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };

    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(event) {
    const { name, value } = event.target;
    console.log(this.state)

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value
      }
    });
  }

  render() {
    return (
      <div className='page'>
        <h1 className='title'>{`Hello, ${this.state.userData.firstName}`}</h1>
        <main className='content'>
          <ShoppingCart
            userData={this.state.userData}
          />
          <Profile
            userData={this.state.userData}
            onFormChange={this.onFormChange}
          />
        </main>
      </div>
    );
  }
}

export default App;
