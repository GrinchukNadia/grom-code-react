import React, { Component } from 'react';
import './productsList.scss';

class ProductsList extends Component {
  render() {
    const totalPrice = this.props.cartItems.reduce((acc, { price }) => acc + price, 0);
    return (
      <div className='products'>
        <ul className='products__list'>
          {this.props.cartItems.map(({ id, name, price }) => {
            return (
              <li key={id} className='products__list-item'>
                <span className='products__item-name'>{name}</span>
                <span className='products__item-price'>{`$${price}`}</span>
              </li>
            );
          })}
        </ul>
        <div className='products__total'>{`Total: $${totalPrice}`}</div>
      </div>
    );
  }
}

export default ProductsList;
