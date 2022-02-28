import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductsList from './ProductsList.jsx';

const ShoppingCart = ({ userData, cartItems }) => {
  const count = cartItems.length;
  return (
    <div className='column'>
      <CartTitle count={count} firstName={userData.firstName} />
      <ProductsList cartItems={cartItems} />
    </div>
  );
};

export default ShoppingCart;
