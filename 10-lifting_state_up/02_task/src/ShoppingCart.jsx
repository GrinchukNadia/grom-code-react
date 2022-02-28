import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductList from './ProductList.jsx';

const ShoppingCart = ({ userData, cartItems }) => {
  const count = cartItems.length;
  return (
    <div className='column'>
      <CartTitle count={count} firstName={userData.firstName} />
      <ProductList cartItems={cartItems} />
    </div>
  );
};

export default ShoppingCart;
