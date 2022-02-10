import React from 'react';
import './message.scss';

const Message = ({message}) => {
  if (!message) {
    return null;
  }
  return <div className='message'>{message}</div>;
};

export default Message;
