import React from 'react';
import './spinner.scss';


const Spinner = ({size}) => {
  return (
    <span
      style={{ width: `${size}px`, height: `${size}px` }}
      className='spinner'
    ></span>
  );
}

export default Spinner;
