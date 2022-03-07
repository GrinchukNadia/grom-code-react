import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ children, onHide, title, isWisible }) => {

  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button onClick={onHide} className='expand__toggle-btn'>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      {isWisible ? <div className='expand__content'>{children}</div> : null}
      
    </div>
  );
};

export default Expand;
