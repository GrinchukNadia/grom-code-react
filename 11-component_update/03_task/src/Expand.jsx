import React from 'react';

const Expand = ({ children, onHide, isWisible, title }) => {
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button onClick={onHide} className='expand__toggle-btn'>
          <i
            style={isWisible ? null : { transform: 'rotate(180deg)' }}
            className='fas fa-chevron-up'
          ></i>
        </button>
      </div>
        {children}
    </div>
  );
};

export default Expand;
