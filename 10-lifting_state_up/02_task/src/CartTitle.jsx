import React from 'react';
import './cartTitle.scss';

const CartTitle = ({count, firstName}) => {
  return <div className='cart-title'>{`${firstName}, you added ${count} items`}</div>;
};

export default CartTitle;
