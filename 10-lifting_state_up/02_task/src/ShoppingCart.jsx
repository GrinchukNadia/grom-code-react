import React, { Component } from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

class ShoppingCart extends Component {
  state = {
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
      ]
    };

  render() {
    const count = this.state.cartItems.length;
    return (
      <>
        <CartTitle count={count} userName={this.props.userData.firstName} />
        <ProductsList cartItems={this.state.cartItems} />
      </>
    );
  }
}

export default ShoppingCart;
