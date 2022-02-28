import React, { Component } from 'react';
import './index.scss';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [
        {
          id: '1',
          name: 'iPhone 11',
          price: 999,
        },
        {
          id: '2',
          name: 'iPad Pro',
          price: 799,
        },
      ],
      userData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };

    this.onFormChange = this.onFormChange.bind(this)
  }

  onFormChange(event) {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      userData: {
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
            cartItems={this.state.cartItems}
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
