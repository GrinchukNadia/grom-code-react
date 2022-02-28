import React from 'react';
import './productsList.scss';

const ProductsList = ({ cartItems }) => {
  const cartItemsElements = cartItems.map(({ id, name, price }) => {
    return (
      <li key={id} className='products__list-item'>
        <span className='products__item-name'>{name}</span>
        <span className='products__item-price'>{`$${price}`}</span>
      </li>
    );
  });
  const totalPrice = cartItems.reduce((acc, { price }) => acc + price, 0);

  return (
    <div className='products'>
      <ul className='products__list'>{cartItemsElements}</ul>
      <div className='products__total'>{`Total: $${totalPrice}`}</div>
    </div>
  );
};

export default ProductsList;
