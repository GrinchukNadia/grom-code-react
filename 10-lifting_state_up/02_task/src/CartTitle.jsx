import React from 'react';
import './cartTitle.scss';

const CartTitle = ({count, userName}) => {
  return <div className='cart-title'>{`${userName}, you added ${count} items`}</div>;
};

export default CartTitle;
