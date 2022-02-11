import React from 'react';
import './logout.scss';

const Logout = ({onLogout}) => {
  return <button onClick={() => onLogout()} className='logout btn'>Logout</button>;
};

export default Logout;
