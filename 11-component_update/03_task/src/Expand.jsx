import React from 'react';

const Expand = ({ children, onHide, title, isWisible }) => {

  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button onClick={onHide} className='expand__toggle-btn'>
          <i className='fas fa-chevron-up'></i>
        </button>
      </div>
      {isWisible ? <div className='expand__content'>{children}</div> : null}
    </div>
  );
};

export default Expand;
