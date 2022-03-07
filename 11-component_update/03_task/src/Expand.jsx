import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, onHide, isWisible, title }) => {
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button onClick={onHide} className='expand__toggle-btn'>
          <i
            style={isWisible ? { transform: 'rotate(180deg)' } : {}}
            className='fas fa-chevron-down'
          ></i>
        </button>
      </div>
      <div className='expand__content'>{children}</div>
    </div>
  );
};

Expand.propTypes = {
  isWisible: PropTypes.bool,
};

Expand.defaultProps = {
  isWisible: false,
};

export default Expand;
