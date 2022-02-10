import React from 'react';
import ReactDOM from 'react-dom';
import Mailbox from './Mailbox.jsx';
import './index.scss';

const messages = ['2', '2']

const rootElem = document.querySelector('#root');
ReactDOM.render(<Mailbox unreadMessages={messages} />, rootElem);
