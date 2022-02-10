import React from 'react';

const Offline = ({onConnect}) => {
  return (
    <>
      <span className='status__text'>Offline</span>
      <button className='status__btn' onClick={() => onConnect()}>Reconnect</button>
    </>
  );
};

export default Offline;
