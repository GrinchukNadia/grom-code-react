import React from 'react';

const Offline = ({onConnect}) => {
  return (
    <div className='status'>
      <span className='status__text'>Offline</span>
      <button className='status__btn' onClick={() => onConnect()}>Reconnect</button>
    </div>
  );
};

export default Offline;
