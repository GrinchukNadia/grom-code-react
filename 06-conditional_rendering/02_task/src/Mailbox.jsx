import React, { Component } from 'react';
import './mailbox.scss';

const Mailbox = (props) => {
  const messagesCount = props.unreadMessages.length
  return (
    <>
      <div className='mailbox__text'>MESSAGES</div>
      {messagesCount > 0 && <div className='mailbox__count'>{messagesCount}</div>}
    </>
  );
}

export default Mailbox;
